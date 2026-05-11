package se.mistral.backend.auth;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import se.mistral.backend.auth.dto.AuthResponse;
import se.mistral.backend.auth.dto.RegisterRequest;
import se.mistral.backend.auth.dto.RegisterResponse;
import se.mistral.backend.auth.dto.ValidationResponse;
import se.mistral.backend.user.User;
import se.mistral.backend.auth.dto.LoginRequest;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;      // set by lombok

    /**
     * Register the user from the request.
     *
     * @param request the request
     * @return the response entity with a message depending on the result of the registration attempt
     */
    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    /**
     * Tries to log in the user.
     *
     * @param request the request
     * @return the response entity with a message depending on the result of the login attempt
     */
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    /**
     * Validates token  .
     *
     * @return the response entity fot the validation, being true or false depending on validity of the token.
     */
    @GetMapping("/validate")
    public ResponseEntity<ValidationResponse> validateToken(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(new ValidationResponse(user.getRole()));
    }
}
