package se.mistral.backend.websocket;

import java.util.Map;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;
import org.springframework.web.util.UriComponentsBuilder;


@Component
public class AuthHandshakeInterceptor implements HandshakeInterceptor {


    /**
     * Before handshake process request information.
     * The request is always let through, we'll close
     * in the handler if the request is invalid
     *
     * @param request    the request
     * @param response   the response
     * @param wsHandler  the ws handler
     * @param attributes the attributes
     * @return true
     */
    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response,
                                   WebSocketHandler wsHandler, Map<String, Object> attributes) {

        var params = UriComponentsBuilder.fromUri(request.getURI())
                                     .build()
                                     .getQueryParams();

        String token = params.getFirst("token");
        if (token != null) {
            attributes.put("token", token);
        }

        return true;
    }

    /**
     * After handshake.
     *
     * @param request   the request
     * @param response  the response
     * @param wsHandler the ws handler
     * @param exception the exception
     */
    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response,
                               WebSocketHandler wsHandler, Exception exception) {} // do nothing after (for now at least)
}

