package se.mistral.backend.attendance;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import se.mistral.backend.attendance.dto.AttendanceDto;
import se.mistral.backend.attendance.dto.AttendanceDtoList;
import se.mistral.backend.attendance.dto.AttendanceRequest;
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

    private AttendanceDto entityToDto(Attendance attendance) {
        return new AttendanceDto(
                attendance.getId(),
                attendance.getChild().getId(),
                attendance.getDate(),
                attendance.getPresent()
                );
    }

    public AttendanceDtoList getAttendances(AttendancesRequest request) {
        List<AttendanceDto> attendanceDtoList = attendanceRepository.findByChildId(request.childId())
                                                                    .stream()
                                                                    .map(this::entityToDto)
                                                                    .toList();
        return new AttendanceDtoList(attendanceDtoList, attendanceDtoList.size());
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
        attendanceRepository.save(attendance);
        return entityToDto(attendance);
    }
}

