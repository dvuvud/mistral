package se.mistral.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.mistral.backend.user.dto.BasicUserInformation;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/teachers")
    public ResponseEntity<List<BasicUserInformation>> retrieveAllTeachers() {
        return ResponseEntity.ok(userService.retrieveAllTeachers());
    }

}