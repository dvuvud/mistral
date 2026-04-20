package se.mistral.backend.websocket;

import java.util.List;
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

@Component
@RequiredArgsConstructor
public class MyWebSocketHandler extends TextWebSocketHandler {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final Set<WebSocketSession> sessions = ConcurrentHashMap.newKeySet();

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        // handle a message
        for (WebSocketSession s : sessions) {
            s.sendMessage(message);
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        String token = extractToken(session);
        if (token == null || !isValid(token)) {
            closeQuietly(session);
            return;
        }
        sessions.add(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        sessions.remove(session);
    }

    private String extractToken(WebSocketSession session) {
        List<String> headers = session.getHandshakeHeaders().get("Authorization");
        if (headers == null || headers.isEmpty()) return null;
        String header = headers.get(0);
        return header.startsWith("Bearer ") ? header.substring(7) : null;
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
