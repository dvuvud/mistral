package se.mistral.backend;

import org.springframework.transaction.annotation.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.mistral.backend.auth.AuthService;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class AuthTests {

    @Autowired
    private AuthService authService;

    @Test
    void test() {
        assertThat(authService).isNotNull();
    }
}
