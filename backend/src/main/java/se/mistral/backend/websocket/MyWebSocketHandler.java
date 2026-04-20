package se.mistral.backend.websocket;

import java.io.IOException;
import java.util.List;
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
            default            -> broadcastToRoom(room, message);
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) { // after a session is upgraded
        String token = extractToken(session);
        if (token == null || !isValid(token)) {
            closeQuietly(session);
            return;
        }
        sessionRooms.put(session, ConcurrentHashMap.newKeySet());
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        Set<String> joined = sessionRooms.remove(session);
        if (joined != null) {
            joined.forEach(room -> rooms.getOrDefault(room, ConcurrentHashMap.newKeySet()).remove(session));
        }
    }

    public void broadcastToRoom(String room, TextMessage message) throws IOException {
        Set<WebSocketSession> roomSessions = rooms.getOrDefault(room, ConcurrentHashMap.newKeySet());
        for (WebSocketSession s : roomSessions) {
            synchronized (s) {
                s.sendMessage(message);
            }
        }
    }

    private void subscribe(WebSocketSession session, String room) {
        rooms.computeIfAbsent(room, k -> ConcurrentHashMap.newKeySet()).add(session);
        sessionRooms.get(session).add(room);
    }

    private void unsubscribe(WebSocketSession session, String room) {
        rooms.getOrDefault(room, ConcurrentHashMap.newKeySet()).remove(session);
        sessionRooms.getOrDefault(session, ConcurrentHashMap.newKeySet()).remove(room);
    }

    private String extractToken(WebSocketSession session) {
        Object token = session.getAttributes().get("token");
        return token != null ? token.toString() : null;
    }

    private boolean isValid(String token) {
        try {
            String email = jwtService.extractUsername(token);
            UserDetails user = userDetailsService.loadUserByUsername(email);
            if (!jwtService.isTokenValid(token, user)) return false;

            User appUser = (User) user;
            return appUser.getRole() == Role.TEACHER;
        } catch (Exception e) {
            return false;
        }
    }

    private void closeQuietly(WebSocketSession session) {
        try { session.close(CloseStatus.NOT_ACCEPTABLE); } catch (Exception ignored) {}
    }
}
