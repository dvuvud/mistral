package se.mistral.backend.attendance;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import se.mistral.backend.exception.NotFoundException;

import se.mistral.backend.attendance.dto.AttendanceRequest;
import se.mistral.backend.child.ChildRepository;
import se.mistral.backend.attendance.dto.AttendanceDto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


@Service
@RequiredArgsConstructor
public class AttendanceService {

    private final AttendanceRepository attendanceRepository;
    private final ChildRepository childRepository;

    /**
     * Gets attendance of a child on a given date.
     *
     * @param childId the child id
     * @param date    the date
     * @return the attendance dto of the child at the given date
     */
    public AttendanceDto getAttendance(Long childId, LocalDate date) {
        return attendanceRepository.findAttendanceByChildIdAndDate(childId, date)
        .orElseThrow(() -> new NotFoundException("Attendance is not logged for this child on " + date.toString()));
    }

    /**
     * Gets the full attendance history for a child, ordered by date descending.
     *
     * @param childId the child id
     * @return the list of attendance dtos for the child
     */
    public List<AttendanceDto> getAttendanceHistory(Long childId) {
        if (!childRepository.existsById(childId)) {
            throw new NotFoundException("Child not found");
        }
        return attendanceRepository.findAttendanceHistoryByChildId(childId);
    }

    /**
     * Updates the attendance of a child on a given date from the request.
     *
     * @param request the request
     * @return the attendance dto of the new status of the attendance for the specified child
     */
    public AttendanceDto updateAttendance(AttendanceRequest request) {
        Attendance attendance = attendanceRepository.findByChildIdAndDate(request.childId(), request.date())
            .orElseGet(() -> Attendance.builder()
                .date(request.date())
                .child(childRepository.findById(request.childId()).orElseThrow(() -> new NotFoundException("Child not found")))
                .build()
            );

        attendance.setStatus(request.status());

        if (request.status() == AttendanceStatus.CHECKED_IN) {
            attendance.setCheckInTime(LocalDateTime.now());
        } else if (request.status() == AttendanceStatus.CHECKED_OUT) {
            attendance.setCheckOutTime(LocalDateTime.now());
        }

        attendance = attendanceRepository.save(attendance);      // throws ObjectOptimisticLockingFailureException on conflict
        return new AttendanceDto(attendance.getStatus(), attendance.getCheckInTime(), attendance.getCheckOutTime());
    }
}
