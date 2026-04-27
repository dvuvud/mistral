package se.mistral.backend.group;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import se.mistral.backend.group.dto.GroupResponse;

import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;


@RequiredArgsConstructor
@RequestMapping("/api/group")
@RestController
public class GroupController {

    private final GroupService groupService;

    @GetMapping()
    public ResponseEntity<List<GroupResponse>> getAllGroups() {
        return ResponseEntity.ok(groupService.getAllGroups());
    }
}
