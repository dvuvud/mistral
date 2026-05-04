package se.mistral.backend.attendance;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import se.mistral.backend.attendance.dto.AttendanceDto;
import se.mistral.backend.attendance.dto.AttendanceRequest;

@RestController
@RequestMapping("/api/attendance")
@RequiredArgsConstructor
public class AttendanceController {

    private final AttendanceService attendanceService;

    /**
     * Update attendance response.
     *
     * @param request the request
     * @return the response entity from updating the attendance
     */
    @PutMapping()
    public ResponseEntity<AttendanceDto> updateAttendance(@Valid @RequestBody AttendanceRequest request) {
        return ResponseEntity.ok(attendanceService.updateAttendance(request));
    }

    /**
     * Gets attendance.
     *
     * @param childId the child id
     * @param date    the date
     * @return the attendance
     */
    @GetMapping()
    public ResponseEntity<AttendanceDto> getAttendance(@RequestParam Long childId, @RequestParam(required = false) LocalDate date) {
        return ResponseEntity.ok(attendanceService.getAttendance(childId, date != null ? date : LocalDate.now()));
    }
}
