package se.mistral.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import se.mistral.backend.user.dto.BasicUserInformation;
import se.mistral.backend.user.dto.UpdateColorRequest;
import se.mistral.backend.user.dto.UserResponse;

import java.util.List;


@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    /**
     * Retrieve all teachers.
     *
     * @return the list of all teachers
     */
    @GetMapping("/teachers")
    public ResponseEntity<List<BasicUserInformation>> retrieveAllTeachers() {
        return ResponseEntity.ok(userService.retrieveAllTeachers());
    }

    @GetMapping("/teacher")
    public ResponseEntity<UserResponse> retrieveOneTeacher(@RequestParam Long teacherId) {
        return ResponseEntity.ok(userService.retrieveOneTeacher(teacherId));
    }

    @PatchMapping("/color")
    public ResponseEntity<Void> updateColor(
            @AuthenticationPrincipal User user,
            @Valid @RequestBody UpdateColorRequest request) {
        userService.updateColor(user.getId(), request.color());
        return ResponseEntity.noContent().build();
    }

}
