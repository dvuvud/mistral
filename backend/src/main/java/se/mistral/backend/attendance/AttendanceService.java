package se.mistral.backend.attendance;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import se.mistral.backend.exception.NotFoundException;

import se.mistral.backend.attendance.dto.AttendanceRequest;
import se.mistral.backend.child.ChildRepository;
import se.mistral.backend.attendance.dto.AttendanceDto;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AttendanceService {

    private final AttendanceRepository attendanceRepository;
    private final ChildRepository childRepository;

    public AttendanceDto getAttendance(Long childId, LocalDate date) {
        return attendanceRepository.findPresenceByChildIdAndDate(childId, date);
    }

    public AttendanceDto updateAttendance(AttendanceRequest request) {
        Attendance attendance = attendanceRepository.findByChildIdAndDate(request.childId(), request.date())
            .orElseGet(() -> Attendance.builder()
                    .date(request.date())
                    .child(childRepository.findById(request.childId()).orElseThrow(() -> new NotFoundException("Child not found")))
                    .present(request.present())
                    .build()
                );
        attendance.setPresent(request.present());
        attendance = attendanceRepository.save(attendance);      // throws ObjectOptimisticLockingFailureException on conflict
        return new AttendanceDto(attendance.getPresent());
    }
}

