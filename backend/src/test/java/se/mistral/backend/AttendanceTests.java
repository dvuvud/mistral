package se.mistral.backend;

import org.springframework.transaction.annotation.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.mistral.backend.attendance.AttendanceService;
import se.mistral.backend.attendance.AttendanceStatus;
import se.mistral.backend.attendance.dto.AttendanceDto;
import se.mistral.backend.attendance.dto.AttendanceRequest;
import se.mistral.backend.child.ChildService;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import se.mistral.backend.exception.NotFoundException;

import java.time.LocalDate;
import java.util.List;

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

    private ChildResponse createTestChild() {
        return childService.createChild(new CreateChildRequest("test"));
    }

    // --- getAttendance ---

    @Test
    void getAttendanceNotFoundTest() {
        assertThatExceptionOfType(NotFoundException.class).isThrownBy(
                () -> attendanceService.getAttendance(1L, testDate))
                .withMessage("Attendance is not logged for this child on 2026-04-01");
    }

    @Test
    void getAttendanceCheckedInTest() {
        ChildResponse child = createTestChild();
        attendanceService.updateAttendance(new AttendanceRequest(child.id(), testDate, AttendanceStatus.CHECKED_IN));

        AttendanceDto result = attendanceService.getAttendance(child.id(), testDate);
        assertThat(result.status()).isEqualTo(AttendanceStatus.CHECKED_IN);
        assertThat(result.checkInTime()).isNotNull();
        assertThat(result.checkOutTime()).isNull();
    }

    @Test
    void getAttendanceCheckedOutTest() {
        ChildResponse child = createTestChild();
        attendanceService.updateAttendance(new AttendanceRequest(child.id(), testDate, AttendanceStatus.CHECKED_OUT));

        AttendanceDto result = attendanceService.getAttendance(child.id(), testDate);
        assertThat(result.status()).isEqualTo(AttendanceStatus.CHECKED_OUT);
        assertThat(result.checkOutTime()).isNotNull();
        assertThat(result.checkInTime()).isNull();
    }

    @Test
    void getAttendanceAbsentTest() {
        ChildResponse child = createTestChild();
        attendanceService.updateAttendance(new AttendanceRequest(child.id(), testDate, AttendanceStatus.ABSENT));

        AttendanceDto result = attendanceService.getAttendance(child.id(), testDate);
        assertThat(result.status()).isEqualTo(AttendanceStatus.ABSENT);
        assertThat(result.checkInTime()).isNull();
        assertThat(result.checkOutTime()).isNull();
    }

    @Test
    void getAttendanceLeaveTest() {
        ChildResponse child = createTestChild();
        attendanceService.updateAttendance(new AttendanceRequest(child.id(), testDate, AttendanceStatus.LEAVE));

        AttendanceDto result = attendanceService.getAttendance(child.id(), testDate);
        assertThat(result.status()).isEqualTo(AttendanceStatus.LEAVE);
        assertThat(result.checkInTime()).isNull();
        assertThat(result.checkOutTime()).isNull();
    }

    // --- updateAttendance ---

    @Test
    void updateAttendanceChildNotFoundTest() {
        AttendanceRequest request = new AttendanceRequest(1L, testDate, AttendanceStatus.CHECKED_IN);
        assertThatExceptionOfType(NotFoundException.class).isThrownBy(
                () -> attendanceService.updateAttendance(request))
                .withMessage("Child not found");
    }

    @Test
    void updateAttendanceBaseValueDoesNotSetTimesTest() {
        ChildResponse child = createTestChild();
        AttendanceDto result = attendanceService.updateAttendance(
                new AttendanceRequest(child.id(), testDate, AttendanceStatus.NOT_SET));

        assertThat(result.status()).isEqualTo(AttendanceStatus.NOT_SET);
        assertThat(result.checkInTime()).isNull();
        assertThat(result.checkOutTime()).isNull();
    }

    @Test
    void updateAttendanceCheckedInSetsCheckInTimeTest() {
        ChildResponse child = createTestChild();
        AttendanceDto result = attendanceService.updateAttendance(
                new AttendanceRequest(child.id(), testDate, AttendanceStatus.CHECKED_IN));

        assertThat(result.status()).isEqualTo(AttendanceStatus.CHECKED_IN);
        assertThat(result.checkInTime()).isNotNull();
        assertThat(result.checkOutTime()).isNull();
    }

    @Test
    void updateAttendanceCheckedOutSetsCheckOutTimeTest() {
        ChildResponse child = createTestChild();
        AttendanceDto result = attendanceService.updateAttendance(
                new AttendanceRequest(child.id(), testDate, AttendanceStatus.CHECKED_OUT));

        assertThat(result.status()).isEqualTo(AttendanceStatus.CHECKED_OUT);
        assertThat(result.checkOutTime()).isNotNull();
        assertThat(result.checkInTime()).isNull();
    }

    @Test
    void updateAttendanceAbsentDoesNotSetTimesTest() {
        ChildResponse child = createTestChild();
        AttendanceDto result = attendanceService.updateAttendance(
                new AttendanceRequest(child.id(), testDate, AttendanceStatus.ABSENT));

        assertThat(result.status()).isEqualTo(AttendanceStatus.ABSENT);
        assertThat(result.checkInTime()).isNull();
        assertThat(result.checkOutTime()).isNull();
    }

    @Test
    void updateAttendanceLeaveDoesNotSetTimesTest() {
        ChildResponse child = createTestChild();
        AttendanceDto result = attendanceService.updateAttendance(
                new AttendanceRequest(child.id(), testDate, AttendanceStatus.LEAVE));

        assertThat(result.status()).isEqualTo(AttendanceStatus.LEAVE);
        assertThat(result.checkInTime()).isNull();
        assertThat(result.checkOutTime()).isNull();
    }

    @Test
    void updateAttendanceStatusTransitionPreservesBothTimesTest() {
        ChildResponse child = createTestChild();

        attendanceService.updateAttendance(new AttendanceRequest(child.id(), testDate, AttendanceStatus.CHECKED_IN));
        AttendanceDto checkedOut = attendanceService.updateAttendance(
                new AttendanceRequest(child.id(), testDate, AttendanceStatus.CHECKED_OUT));

        assertThat(checkedOut.status()).isEqualTo(AttendanceStatus.CHECKED_OUT);
        assertThat(checkedOut.checkInTime()).isNotNull();
        assertThat(checkedOut.checkOutTime()).isNotNull();
    }

    // --- getAttendanceHistory ---

    @Test
    void getAttendanceHistoryChildNotFoundTest() {
        assertThatExceptionOfType(NotFoundException.class).isThrownBy(
                () -> attendanceService.getAttendanceHistory(1L))
                .withMessage("Child not found");
    }

    @Test
    void getAttendanceHistoryEmptyForChildWithNoAttendanceTest() {
        ChildResponse child = createTestChild();
        assertThat(attendanceService.getAttendanceHistory(child.id())).isEmpty();
    }

    @Test
    void getAttendanceHistoryReturnsAllRecordsOrderedByDateDescTest() {
        ChildResponse child = createTestChild();

        attendanceService.updateAttendance(new AttendanceRequest(child.id(), testDate, AttendanceStatus.CHECKED_IN));
        attendanceService.updateAttendance(new AttendanceRequest(child.id(), testDate.plusDays(1), AttendanceStatus.ABSENT));
        attendanceService.updateAttendance(new AttendanceRequest(child.id(), testDate.plusDays(2), AttendanceStatus.CHECKED_OUT));

        List<AttendanceDto> history = attendanceService.getAttendanceHistory(child.id());

        assertThat(history).hasSize(3);
        assertThat(history.get(0).status()).isEqualTo(AttendanceStatus.CHECKED_OUT);
        assertThat(history.get(0).checkOutTime()).isNotNull();
        assertThat(history.get(1).status()).isEqualTo(AttendanceStatus.ABSENT);
        assertThat(history.get(2).status()).isEqualTo(AttendanceStatus.CHECKED_IN);
        assertThat(history.get(2).checkInTime()).isNotNull();
    }
}
