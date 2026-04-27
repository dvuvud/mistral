package se.mistral.backend.child;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.AttendanceResponse;

import java.time.LocalDate;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RequiredArgsConstructor
@RequestMapping("/api/children")
@RestController
public class ChildController {

    private final ChildService childService;

    @GetMapping()
    public ResponseEntity<List<ChildResponse>> getAllChildren() {
        return ResponseEntity.ok(childService.getAllChildren());
    }

    @GetMapping("/attendance")
    public ResponseEntity<List<AttendanceResponse>> getAllChildrenWithAttendanceIfExists(@RequestParam(required = false) LocalDate date) {
        return ResponseEntity.ok(childService.getAllChildrenWithAttendanceIfExists(date != null ? date : LocalDate.now()));
    }

    @GetMapping("/attendance/group")
    public ResponseEntity<List<AttendanceResponse>> getAllChildrenWithAttendanceIfExistsInGroup(
        @RequestParam(required = false) LocalDate date,
        @RequestParam Long groupId) {
        return ResponseEntity.ok(childService.getAllChildrenWithAttendanceIfExistsInGroup(date != null ? date : LocalDate.now(), groupId));
    }

    @GetMapping("/group/{groupId}")
    public ResponseEntity<List<ChildResponse>> getChildrenByGroup(@PathVariable Long groupId) {
        return ResponseEntity.ok(childService.getChildrenByGroup(groupId));
    }
}
