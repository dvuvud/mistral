package se.mistral.backend.admin;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.mistral.backend.user.dto.UserResponse;
import se.mistral.backend.group.GroupService;
import se.mistral.backend.group.dto.GroupResponse;
import se.mistral.backend.group.dto.CreateGroupRequest;
import se.mistral.backend.child.dto.ChildWithGroupResponse;
import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api/admin")
@RestController
public class AdminController {
    
    private final AdminService adminService;
    private final GroupService groupService;

    @PostMapping("/child")
    public ResponseEntity<ChildResponse> createChild(@RequestBody CreateChildRequest request) {
        return ResponseEntity.ok(adminService.createChild(request));
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<UserResponse> setUserActive(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.setUserActive(id));
    }

    @PostMapping("/group")
    public ResponseEntity<GroupResponse> createGroup(@RequestBody CreateGroupRequest request) {
        return ResponseEntity.ok(groupService.createGroup(request));
    }

    @PutMapping("/group/{groupId}/child/{childId}")
    public ResponseEntity<GroupResponse> assignChildToGroup(@PathVariable Long groupId, @PathVariable Long childId) {
        return ResponseEntity.ok(groupService.assignChildToGroup(groupId, childId));
    }

    @GetMapping("/children")
    public ResponseEntity<List<ChildWithGroupResponse>> getAllChildrenWithGroup() {
        return ResponseEntity.ok(adminService.getAllChildrenWithGroup());
    }

    @GetMapping("/groups")
    public ResponseEntity<List<GroupResponse>> getAllGroups() {
        return ResponseEntity.ok(groupService.getAllGroups());
    }

    @DeleteMapping("/child/{childId}")
    public ResponseEntity<Void> deleteChild(@PathVariable Long childId) {
        adminService.deleteChild(childId);
        return ResponseEntity.noContent().build();
    }
}