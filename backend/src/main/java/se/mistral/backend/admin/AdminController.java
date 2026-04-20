package se.mistral.backend.admin;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.mistral.backend.user.dto.UserResponse;

@RequiredArgsConstructor
@RequestMapping("/api/admin")
@RestController
public class AdminController {
    
    private final AdminService adminService;

    @PostMapping()
    public ResponseEntity<ChildResponse> createChild(@RequestBody CreateChildRequest request) {
        return ResponseEntity.ok(adminService.createChild(request));
    }

    @PutMapping("/lärare/{id}")
    public ResponseEntity<UserResponse> updateTeachers(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.updateTeachers(id));
    }

    @PutMapping("/grupp")
    public ResponseEntity<String> swapGroup() {
        return ResponseEntity.ok("Not implemented yet");
    }
}
