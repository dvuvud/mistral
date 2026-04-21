package se.mistral.backend;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.mistral.backend.auth.AuthService;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class AuthTests {
    private final AuthService authService;

    public AuthTests(@Autowired AuthService authService) {
        this.authService = authService;
    }

    @Test
    void test() {
        assertThat(authService).isNotNull();
    }
}