package se.mistral.backend.attendance;

import lombok.RequiredArgsConstructor;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.stereotype.Service;
import se.mistral.backend.attendance.dto.AttendanceDto;
import se.mistral.backend.attendance.dto.AttendanceDtoList;
import se.mistral.backend.attendance.dto.AttendanceListItem;
import se.mistral.backend.attendance.dto.AttendanceRequest;
import se.mistral.backend.attendance.dto.AttendanceFetchRequest;
import se.mistral.backend.attendance.dto.AttendancesRequest;
import se.mistral.backend.child.Child;
import se.mistral.backend.child.ChildRepository;

import java.time.LocalDate;
import java.util.Optional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AttendanceService {

    private final AttendanceRepository attendanceRepository;
    private final ChildRepository childRepository;

    public AttendanceDtoList getAttendances(AttendancesRequest request) {
        List<AttendanceListItem> list = attendanceRepository.findByDate(request.date())
            .stream()
            .map(attendance -> new AttendanceListItem(
                        attendance.getChild().getId(),
                        attendance.getChild().getName(),
                        attendance.getPresent()
                        )
                )
            .toList();
        return new AttendanceDtoList(list, list.size());
    }

    public AttendanceDto getAttendance(AttendanceFetchRequest request) {
        Attendance attendance = attendanceRepository.findByChildIdAndDate(request.childId(), request.date())
            .orElse(Attendance.builder()
                    .date(request.date())
                    .child(childRepository.findById(request.childId()).orElseThrow(() -> new RuntimeException("Child not found")))
                    .present(false)
                    .build()
                   );
        try {
            attendanceRepository.save(attendance);
        }
        catch (ObjectOptimisticLockingFailureException e) {}

        return new AttendanceDto(attendance.getPresent());
    }

    public AttendanceDto updateAttendance(AttendanceRequest request) {
        Attendance attendance = attendanceRepository.findByChildIdAndDate(request.childId(), request.date())
            .orElse(Attendance.builder()
                    .date(request.date())
                    .child(childRepository.findById(request.childId()).orElseThrow(() -> new RuntimeException("Child not found")))
                    .present(request.present())
                    .build()
                   );
        attendance.setPresent(request.present());
        try {
            attendanceRepository.save(attendance);
        }
        catch (ObjectOptimisticLockingFailureException e) {
            throw new RuntimeException("Another teacher is currently updating this entry");
        }
        return new AttendanceDto(attendance.getPresent());
    }
}

