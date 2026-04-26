package se.mistral.backend;

import org.springframework.transaction.annotation.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.mistral.backend.attendance.AttendanceService;
import se.mistral.backend.attendance.dto.AttendanceDto;
import se.mistral.backend.attendance.dto.AttendanceRequest;
import se.mistral.backend.child.ChildService;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import se.mistral.backend.exception.NotFoundException;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatExceptionOfType;

@SpringBootTest
@Transactional
public class AttendanceTests {

    @Autowired
    private AttendanceService attendanceService;

    @Autowired
    private ChildService childService;

    LocalDate testDate = LocalDate.of(2026, 4, 1);

    @Test
    void getAttendanceNotFoundTest() {
        assertThatExceptionOfType(NotFoundException.class).isThrownBy(
                        () -> attendanceService.getAttendance(1L, LocalDate.parse("2026-04-01")))
                .withMessage("Attendance is not logged for this child on 2026-04-01");
    }

    @Test
    void getAttendanceTrueTest() {
        CreateChildRequest childRequest = new CreateChildRequest("test");
        ChildResponse childResponse = childService.createChild(childRequest);

        AttendanceRequest attendanceRequest = new AttendanceRequest(childResponse.id(), testDate, true);

        attendanceService.updateAttendance(attendanceRequest);
        assertThat(attendanceService.getAttendance(childResponse.id(), testDate)).isEqualTo(new AttendanceDto(true));
    }

    @Test
    void getAttendanceFalseTest() {
        CreateChildRequest childRequest = new CreateChildRequest("test");
        ChildResponse childResponse = childService.createChild(childRequest);

        AttendanceRequest attendanceRequest = new AttendanceRequest(childResponse.id(), testDate, false);

        attendanceService.updateAttendance(attendanceRequest);
        assertThat(attendanceService.getAttendance(childResponse.id(), testDate)).isEqualTo(new AttendanceDto(false));
    }

    @Test
    void updateAttendanceChildNotFoundTest() {
        AttendanceRequest attendanceRequest = new AttendanceRequest(1L, testDate, true);
        assertThatExceptionOfType(NotFoundException.class).isThrownBy(
                        () -> attendanceService.updateAttendance(attendanceRequest))
                .withMessage("Child not found");

    }

    @Test
    void updateAttendanceTrueTest() {
        CreateChildRequest childRequest = new CreateChildRequest("test");
        ChildResponse childResponse = childService.createChild(childRequest);

        AttendanceRequest attendanceRequest = new AttendanceRequest(childResponse.id(), testDate, true);

        AttendanceDto attendanceDto = attendanceService.updateAttendance(attendanceRequest);
        assertThat(attendanceDto.present());
    }

    @Test
    void updateAttendanceFalseTest() {
        CreateChildRequest childRequest = new CreateChildRequest("test");
        ChildResponse childResponse = childService.createChild(childRequest);

        AttendanceRequest attendanceRequest = new AttendanceRequest(childResponse.id(), testDate, false);

        AttendanceDto attendanceDto = attendanceService.updateAttendance(attendanceRequest);
        assertThat(!attendanceDto.present());
    }
}
