package se.mistral.backend.websocket;

import java.util.List;
import java.util.Map;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

@Component
public class AuthHandshakeInterceptor implements HandshakeInterceptor {

    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response,
                                   WebSocketHandler wsHandler, Map<String, Object> attributes) {

        List<String> auth = request.getHeaders().get("Authorization");
        if (auth != null && !auth.isEmpty()) {
            attributes.put("token", auth.get(0).substring("Bearer ".length())); // strip "Bearer " and put in attributes for later use
        }
        return true; // always let it through, we'll close in the handler if invalid
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response,
                               WebSocketHandler wsHandler, Exception exception) {} // do nothing after (for now at least)
}

