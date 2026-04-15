package se.mistral.backend.attendance;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.mistral.backend.attendance.dto.AttendanceDto;
import se.mistral.backend.attendance.dto.AttendanceDtoList;
import se.mistral.backend.attendance.dto.AttendanceRequest;
import se.mistral.backend.attendance.dto.AttendancesRequest;

@RestController
@RequestMapping("/api/attendance")
@RequiredArgsConstructor
public class AttendanceController {

    private final AttendanceService attendanceService;

    @PostMapping()
    public ResponseEntity<AttendanceDto> updateAttendance(@Valid @RequestBody AttendanceRequest request) {
        return ResponseEntity.ok(attendanceService.updateAttendance(request));
    }

    @GetMapping()
    public ResponseEntity<AttendanceDtoList> getAttendances(@Valid @RequestBody AttendancesRequest request) {
        return ResponseEntity.ok(attendanceService.getAttendances(request));
    }
}
