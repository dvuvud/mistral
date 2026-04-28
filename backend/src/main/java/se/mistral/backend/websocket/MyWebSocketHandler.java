package se.mistral.backend.websocket;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import lombok.RequiredArgsConstructor;
import se.mistral.backend.auth.JwtService;
import se.mistral.backend.chat.ChatService;
import se.mistral.backend.chat.dto.ChatMessage;
import se.mistral.backend.journal.JournalService;
import se.mistral.backend.journal.JournalTarget;
import se.mistral.backend.journal.dto.BroadcastMessage;
import se.mistral.backend.journal.ot.Operation;
import se.mistral.backend.user.Role;
import se.mistral.backend.user.User;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

@Component
@RequiredArgsConstructor
public class MyWebSocketHandler extends TextWebSocketHandler {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final JournalService journalService;
    private final ChatService chatService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    private final Map<String, Set<WebSocketSession>> rooms = new ConcurrentHashMap<>(); // all sessions in a given room
    private final Map<WebSocketSession, Set<String>> sessionRooms = new ConcurrentHashMap<>(); // all rooms a given session is in

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        JsonNode json = objectMapper.readTree(message.getPayload());
        String type = json.get("type").asText();
        String room = json.get("room").asText();

        switch (type) {
            case "subscribe"      -> subscribe(session, room);
            case "unsubscribe"    -> unsubscribe(session, room);
            case "DOC_OPERATION"  -> handleDocOperation(session, room, json);
            case "CHAT_MESSAGE"   -> handleChatMessage(session, room, json);
            default               -> broadcastToRoom(session, room, message);
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) { // after a session is upgraded
        String token = extractToken(session);
        if (token == null || !isValid(token)) {
            closeQuietly(session);
            return;
        }

        try {
            String email = jwtService.extractUsername(token);
            User user = (User) userDetailsService.loadUserByUsername(email);

            if (!jwtService.isTokenValid(token, user) || user.getRole() != Role.TEACHER) {
                closeQuietly(session);
                return;
            }

            session.getAttributes().put("userId", user.getId());
            session.getAttributes().put("userName", user.getFirstName() + " " + user.getLastName());

            sessionRooms.putIfAbsent(session, ConcurrentHashMap.newKeySet());

        } catch (Exception e) {
            closeQuietly(session);
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        Set<String> joined = sessionRooms.remove(session);
        if (joined == null) {
            return;
        }

        for (String room : joined) {
            removeSessionFromRoom(room, session);
        }
    }

    private void handleChatMessage(WebSocketSession session, String room, JsonNode json) {
        // room format: "chat:{user1_id}:{user2_id}"
        String[] parts = room.split(":");

        Long userId = (Long) session.getAttributes().get("userId");
        Long senderId = 0L;
        Long recipientId = 0L;

        if (parts.length == 3 && parts[0].equals("chat")) { // if type is chat: check if user is member of chat
            try {
                Long userOneId = (Long) Long.parseLong(parts[1]);
                Long userTwoId = (Long) Long.parseLong(parts[2]);

                if (userTwoId < userOneId) {
                    room = "chat:" + userTwoId + ":" + userOneId;
                }

                if (userId == userOneId) {
                    senderId = userOneId;
                    recipientId = userTwoId;
                } else if (userId == userTwoId) {
                    senderId = userTwoId;
                    recipientId = userOneId;
                } else {
                    closeQuietly(session);
                    return;
                }
            } catch (NumberFormatException e) {
                closeQuietly(session);
                return;
            }
        }

        ChatMessage message = objectMapper.treeToValue(json.get("message"), ChatMessage.class);

        if (senderId != message.senderId() || recipientId != message.recipientId()) {
            closeQuietly(session);
            return;
        }

        chatService.saveMessage(message);

        try {
            TextMessage outbound = new TextMessage(objectMapper.writeValueAsString(message));
            broadcastToRoom(session, room, outbound);
        } catch (Exception ignored) { }
    }
    private void handleDocOperation(WebSocketSession session, String room, JsonNode json) {
        // room format: "journal:child:{childId}:{date}"  e.g. "journal:child:42:2026-04-22"
        //           or "journal:group:{groupId}:{date}"  e.g. "journal:group:7:2026-04-27"
        String[] parts = room.split(":");
        if (parts.length != 4 || !parts[0].equals("journal")) {
            closeQuietly(session);
            return;
        }

        JournalTarget target;
        try {
            target = switch (parts[1]) {
                case "child" -> new JournalTarget.Child(Long.parseLong(parts[2]));
                case "group" -> new JournalTarget.Group(Long.parseLong(parts[2]));
                default -> null;
            };
        } catch (NumberFormatException e) {
            closeQuietly(session);
            return;
        }

        if (target == null) {
            closeQuietly(session);
            return;
        }

        LocalDate date;
        try {
            date = LocalDate.parse(parts[3]);
        } catch (Exception e) {
            closeQuietly(session);
            return;
        }

        int clientRevision = json.get("clientRevision").asInt();
        Long userId = (Long) session.getAttributes().get("userId");

        Operation incoming;
        try {
            incoming = objectMapper.treeToValue(json.get("operation"), Operation.class);
        } catch (Exception ignored) {
            return;
        }

        Integer clientSequence = json.has("sequence") ? json.get("sequence").asInt() : null;

        BroadcastMessage broadcast = journalService.applyOperation(
            target,
            date,
            clientRevision,
            incoming,
            userId,
            clientSequence
        );

        // null sender so the originator also receives the message
        try {
            TextMessage outbound = new TextMessage(objectMapper.writeValueAsString(broadcast));
            broadcastToRoom(null, room, outbound);
        } catch (Exception ignored) {
            // serialization failure shouldn't crash the handler
        }
    }

    private void removeSessionFromRoom(String room, WebSocketSession session) {
        rooms.computeIfPresent(room, (k, sessions) -> {
            sessions.remove(session);
            // returning null from computeIfPresent atomically removes the key along with its value.
            return sessions.isEmpty() ? null : sessions;
        });
    }


    public void broadcastToRoom(WebSocketSession sender, String room, TextMessage message) {
        Set<WebSocketSession> roomSessions = rooms.get(room); // null means no room, not a fake empty set
        if (roomSessions == null) {
            return;
        }

        for (WebSocketSession s : roomSessions) {
            try {
                synchronized (s) {
                    if (s.isOpen() && s != sender) { // check to make sure session wasn't closed before acquiring the lock
                        s.sendMessage(message);
                    }
                }
            } catch (IOException e) { }
        }
    }

    private void subscribe(WebSocketSession session, String room) {
        String[] parts = room.split(":");
        Long userId = (Long) session.getAttributes().get("userId");

        if (parts.length == 3 && parts[0].equals("chat")) { // if type is chat: check if user is member of chat
            try {
                Long userOneId = (Long) Long.parseLong(parts[1]);
                Long userTwoId = (Long) Long.parseLong(parts[2]);

                if (userId != userOneId && userId != userTwoId) {
                    closeQuietly(session);
                    return;
                }

                if (userTwoId < userOneId) {
                    room = "chat:" + userTwoId + ":" + userOneId;
                }
            } catch (NumberFormatException e) {
                closeQuietly(session);
                return;
            }
        } else if (parts.length == 4 && parts[0].equals("journal")) {
            if (!parts[1].equals("child") && !parts[1].equals("group")) {
                closeQuietly(session);
                return;
            }
            try {
                Long.parseLong(parts[2]);
                LocalDate.parse(parts[3]);
            } catch (Exception e) {
                closeQuietly(session);
                return;
            }
        }

        Set<String> myRooms = sessionRooms.get(session);
        if (myRooms == null) {
            return;
        }
        myRooms.add(room);
        rooms.computeIfAbsent(room, k -> ConcurrentHashMap.newKeySet()).add(session);
    }


    private void unsubscribe(WebSocketSession session, String room) {
        removeSessionFromRoom(room, session);
        Set<String> myRooms = sessionRooms.get(session);
        if (myRooms != null) {
            myRooms.remove(room);
        }
    }


    private String extractToken(WebSocketSession session) {
        Object token = session.getAttributes().get("token");
        return token != null ? token.toString() : null;
    }

    private boolean isValid(String token) {
        try {
            String email = jwtService.extractUsername(token);
            UserDetails user = userDetailsService.loadUserByUsername(email);
            if (!jwtService.isTokenValid(token, user)) {
                return false;
            }

            User appUser = (User) user;
            return appUser.getRole() == Role.TEACHER;
        } catch (Exception e) {
            return false;
        }
    }

    private void closeQuietly(WebSocketSession session) {
        try {
            session.close(CloseStatus.NOT_ACCEPTABLE);
        } catch (Exception ignored) { }
    }
}
