package se.mistral.backend.websocket;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

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
import se.mistral.backend.websocket.dto.PresenceMessage;
import se.mistral.backend.websocket.dto.PresenceStateMessage;
import se.mistral.backend.websocket.dto.PresenceUser;
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

    private final Map<String, Set<WebSocketSession>> roomToSessions = new ConcurrentHashMap<>();
    private final Map<WebSocketSession, Set<String>> sessionToRooms = new ConcurrentHashMap<>(); // all rooms a given session is in

    private final Map<String, Map<Long, PresenceUser>> roomPresence = new ConcurrentHashMap<>(); // active members in a given room

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
        if (token == null) {
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
            session.getAttributes().put("userName", user.getName());
            sessionToRooms.putIfAbsent(session, ConcurrentHashMap.newKeySet());

            List<PresenceUser> allPresent = roomPresence.values().stream()
                .flatMap(m -> m.values().stream())
                .toList();
            sendToSession(session, new PresenceStateMessage("PRESENCE_STATE", allPresent));

        } catch (Exception e) {
            closeQuietly(session);
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        Set<String> joined = sessionToRooms.remove(session);
        if (joined == null) {
            return;
        }

        for (String room : joined) {
            leavePresence(session, room);
            leaveRoom(session, room);
        }
    }

    private void handleChatMessage(WebSocketSession session, String rawRoom, JsonNode json) {
        // room format: "chat:{user1_id}:{user2_id}"
        if (!(Room.parse(rawRoom) instanceof Chat chat)) {
            closeQuietly(session);
            return;
        }

        Long userId = (Long) session.getAttributes().get("userId");
        if (!chat.hasMember(userId)) {
            closeQuietly(session);
            return;
        }

        ChatMessage message = objectMapper.treeToValue(json.get("message"), ChatMessage.class);

        if (message.senderId() != userId || message.recipientId() != chat.otherMember(userId)) {
            closeQuietly(session);
            return;
        }

        chatService.saveMessage(message);
        broadcastToRoom(session, chat.toKey(), toTextMessage(message));
    }

    private void handleDocOperation(WebSocketSession session, String rawRoom, JsonNode json) {
        // room format: "journal:child:{childId}:{date}"  e.g. "journal:child:42:2026-04-22"
        //           or "journal:group:{groupId}:{date}"  e.g. "journal:group:7:2026-04-27"

        if (!(Room.parse(rawRoom) instanceof Journal journal)) {
            closeQuietly(session);
            return;
        }

        Long userId  = (Long) session.getAttributes().get("userId");
        int revision = json.get("clientRevision").asInt();
        Integer seq  = json.has("sequence") ? json.get("sequence").asInt() : null;

        Operation incoming;
        try {
            incoming = objectMapper.treeToValue(json.get("operation"), Operation.class);
        } catch (Exception ignored) {
            return;
        }

        BroadcastMessage broadcast = journalService.applyOperation(
            journal.toJournalTarget(), journal.date(), revision, incoming, userId, seq
        );

        // null sender so the originator also receives the message
        broadcastToRoom(null, journal.toKey(), toTextMessage(broadcast));
    }

    private void joinRoom(WebSocketSession session, String room) {
        Set<String> myRooms = sessionToRooms.get(session);
        if (myRooms == null) {
            return;
        }
        myRooms.add(room);
        roomToSessions.computeIfAbsent(room, k -> ConcurrentHashMap.newKeySet()).add(session);
    }

    private void leaveRoom(WebSocketSession session, String room) {
        roomToSessions.computeIfPresent(room, (k, sessions) -> {
            sessions.remove(session);
            return sessions.isEmpty() ? null : sessions;
        });
        Set<String> myRooms = sessionToRooms.get(session);
        if (myRooms != null) {
            myRooms.remove(room);
        }
    }

    private void broadcastToAll(TextMessage message) {
        for (WebSocketSession s : sessionToRooms.keySet()) {
            try {
                synchronized (s) {
                    if (s.isOpen()) {
                        s.sendMessage(message);
                    }
                }
            } catch (IOException ignored) { }
        }
    }

    public void broadcastToRoom(WebSocketSession sender, String room, TextMessage message) {
        Set<WebSocketSession> roomSessions = roomToSessions.get(room); // null means no room, not a fake empty set
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

    private void subscribe(WebSocketSession session, String rawRoom) {
        Room room = Room.parse(rawRoom);
        if (room == null) {
            closeQuietly(session); return;
        }

        Long userId = (Long) session.getAttributes().get("userId");

        if (room instanceof Chat chat && !chat.hasMember(userId)) {
            closeQuietly(session);
            return;
        }

        String key = room.toKey();
        joinRoom(session, key);

        if (room instanceof Journal) {
            String name = (String) session.getAttributes().get("userName");
            roomPresence.computeIfAbsent(key, k -> new ConcurrentHashMap<>())
                .put(userId, new PresenceUser(userId, name, key));
            broadcastToAll(toTextMessage(new PresenceMessage("PRESENCE_JOIN", key, userId, name)));
        }
    }

    private void unsubscribe(WebSocketSession session, String room) {
        leavePresence(session, room);
        leaveRoom(session, room);
    }

    private String extractToken(WebSocketSession session) {
        Object token = session.getAttributes().get("token");
        return token != null ? token.toString() : null;
    }

    private void closeQuietly(WebSocketSession session) {
        try {
            session.close(CloseStatus.NOT_ACCEPTABLE);
        } catch (Exception ignored) { }
    }

    private TextMessage toTextMessage(Object obj) {
        try {
            return new TextMessage(objectMapper.writeValueAsString(obj));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void sendToSession(WebSocketSession session, Object obj) {
        try {
            synchronized (session) {
                if (session.isOpen()) {
                    session.sendMessage(toTextMessage(obj));
                }
            }
        } catch (IOException ignored) { }
    }

    private void leavePresence(WebSocketSession session, String roomKey) {
        if (!(Room.parse(roomKey) instanceof Journal)) {
            return;
        }

        Long userId = (Long) session.getAttributes().get("userId");
        String name = (String) session.getAttributes().get("userName");

        roomPresence.computeIfPresent(roomKey, (k, presence) -> {
            presence.remove(userId);
            return presence.isEmpty() ? null : presence;
        });

        broadcastToAll(toTextMessage(new PresenceMessage("PRESENCE_LEAVE", roomKey, userId, name)));
    }
}
