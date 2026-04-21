package se.mistral.backend.websocket;

import java.io.IOException;
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
import se.mistral.backend.user.Role;
import se.mistral.backend.user.User;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

@Component
@RequiredArgsConstructor
public class MyWebSocketHandler extends TextWebSocketHandler {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    private final Map<String, Set<WebSocketSession>> rooms = new ConcurrentHashMap<>(); // all sessions in a given room
    private final Map<WebSocketSession, Set<String>> sessionRooms = new ConcurrentHashMap<>(); // all rooms a given session is in

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        JsonNode json = objectMapper.readTree(message.getPayload());
        String type = json.get("type").asText();
        String room = json.get("room").asText();

        switch (type) {
            case "subscribe"   -> subscribe(session, room);
            case "unsubscribe" -> unsubscribe(session, room);
            default            -> broadcastToRoom(session, room, message);
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) { // after a session is upgraded
        String token = extractToken(session);
        if (token == null || !isValid(token)) {
            closeQuietly(session);
            return;
        }
        sessionRooms.putIfAbsent(session, ConcurrentHashMap.newKeySet());
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
