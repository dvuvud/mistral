package se.mistral.backend;

import org.springframework.transaction.annotation.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import se.mistral.backend.auth.AuthService;
import se.mistral.backend.auth.dto.RegisterRequest;
import se.mistral.backend.user.User;
import se.mistral.backend.user.UserService;
import se.mistral.backend.user.dto.BasicUserInformation;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class UserTests {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;


    @Test
    void retrieveAllTeachersNoTeacherTest() {
        assertThat(userService.retrieveAllTeachers().isEmpty());
    }

    @Test
    void retrieveAllTeachersOneTeacherTest() {
        RegisterRequest registerRequest = new RegisterRequest(
                "Test Testson",
                "test@gmail.com",
                "password");
        authService.register(registerRequest);
        Optional<User> user1 = userService.findUserByEmail("test@gmail.com");
        assertThat(user1.isPresent());

        assertThat(userService.retrieveAllTeachers().size()).isEqualTo(1);
        assertThat(userService.retrieveAllTeachers().getFirst()).isEqualTo(new BasicUserInformation(user1.get().getId(), user1.get().getName()));
    }

    @Test
    void retrieveAllTeachersTwoTeacherTest() {
        RegisterRequest registerRequest = new RegisterRequest(
                "Test Testson",
                "test@gmail.com",
                "password");
        RegisterRequest registerRequest2 = new RegisterRequest(
                "Test Testson",
                "test2@gmail.com",
                "password");
        authService.register(registerRequest);
        authService.register(registerRequest2);
        assertThat(userService.retrieveAllTeachers().size()).isEqualTo(2);

        Optional<User> user1 = userService.findUserByEmail("test@gmail.com");
        Optional<User> user2 = userService.findUserByEmail("test2@gmail.com");

        assertThat(user1.isPresent());
        assertThat(user2.isPresent());

        assertThat(userService.retrieveAllTeachers().getFirst()).isEqualTo(new BasicUserInformation(user1.get().getId(), user1.get().getName()));
        assertThat(userService.retrieveAllTeachers().getLast()).isEqualTo(new BasicUserInformation(user2.get().getId(), user2.get().getName()));
    }

    @Test
    void retrieveAllTeachersTenTeacherTest() {
        RegisterRequest registerRequest = new RegisterRequest(
                "Test Testson",
                "test@gmail.com",
                "password");
        RegisterRequest registerRequest2 = new RegisterRequest(
                "Test Testson",
                "test2@gmail.com",
                "password");
        RegisterRequest registerRequest3 = new RegisterRequest(
                "Kalle Testson",
                "kalle.testson@gmail.com",
                "1234");
        RegisterRequest registerRequest4 = new RegisterRequest(
                "name nameson",
                "name@gmail.com",
                "name1234");
        RegisterRequest registerRequest5 = new RegisterRequest(
                "name",
                "email@gmail.com",
                "password");
        RegisterRequest registerRequest6 = new RegisterRequest(
                "Test Testdotter",
                "test@test.com",
                "password");
        RegisterRequest registerRequest7 = new RegisterRequest(
                "Test Testson",
                "test@mistral.com",
                "password");

        RegisterRequest registerRequest8 = new RegisterRequest(
                "Test Testson",
                "test2@mistral.com",
                "password");
        RegisterRequest registerRequest9 = new RegisterRequest(
                "Test Testson",
                "test9@mistral.com",
                "password");
        RegisterRequest registerRequest10 = new RegisterRequest(
                "Test Testson",
                "test10@mistral.com",
                "password");

        authService.register(registerRequest);
        authService.register(registerRequest2);
        authService.register(registerRequest3);
        authService.register(registerRequest4);
        authService.register(registerRequest5);
        authService.register(registerRequest6);
        authService.register(registerRequest7);
        authService.register(registerRequest8);
        authService.register(registerRequest9);
        authService.register(registerRequest10);

        assertThat(userService.retrieveAllTeachers().size()).isEqualTo(10);
        Optional<User> user1 = userService.findUserByEmail("test@gmail.com");
        Optional<User> user5 = userService.findUserByEmail("email@gmail.com");
        Optional<User> user10 = userService.findUserByEmail("test10@mistral.com");

        assertThat(user1.isPresent());
        assertThat(user5.isPresent());
        assertThat(user10.isPresent());

        assertThat(userService.retrieveAllTeachers().getFirst()).isEqualTo(new BasicUserInformation(user1.get().getId(), user1.get().getName()));
        assertThat(userService.retrieveAllTeachers().contains(new BasicUserInformation(user5.get().getId(), user5.get().getName())));
        assertThat(userService.retrieveAllTeachers().getLast()).isEqualTo(new BasicUserInformation(user10.get().getId(), user10.get().getName()));
    }
}
