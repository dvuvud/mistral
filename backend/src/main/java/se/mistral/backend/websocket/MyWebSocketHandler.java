package se.mistral.backend.websocket;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import se.mistral.backend.auth.JwtService;

@Component
public class MyWebSocketHandler extends TextWebSocketHandler {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        // handle a message
        session.sendMessage(new TextMessage("Echo: " + payload));
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        String token = extractToken(session);
        if (token == null || !isValid(token)) {
            closeQuietly(session);
            return;
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        System.out.println("Disconnected: " + session.getId());
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
            return jwtService.isTokenValid(token, user);
        } catch (Exception e) {
            return false;
        }
    }

    private void closeQuietly(WebSocketSession session) {
        try { session.close(CloseStatus.NOT_ACCEPTABLE); } catch (Exception ignored) {}
    }
}
