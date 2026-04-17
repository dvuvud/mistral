package se.mistral.backend.attendance;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import se.mistral.backend.attendance.dto.AttendanceDto;
import se.mistral.backend.attendance.dto.AttendanceDtoList;
import se.mistral.backend.attendance.dto.AttendanceRequest;
import se.mistral.backend.attendance.dto.AttendanceFetchRequest;
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

    @PostMapping("/fetch")
    public ResponseEntity<AttendanceDto> getAttendance(@Valid @RequestBody AttendanceFetchRequest request) {
        return ResponseEntity.ok(attendanceService.getAttendance(request));
    }

    @PostMapping("/fetch-all")
    public ResponseEntity<AttendanceDtoList> getAttendances(@Valid @RequestBody AttendancesRequest request) {
        return ResponseEntity.ok(attendanceService.getAttendances(request));
    }
}
