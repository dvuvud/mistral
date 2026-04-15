package se.mistral.backend.attendance;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import se.mistral.backend.attendance.dto.AttendanceDto;
import se.mistral.backend.attendance.dto.AttendanceDtoList;
import se.mistral.backend.attendance.dto.AttendanceRequest;
import se.mistral.backend.child.Child;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AttendanceService {

    private final AttendanceRepository attendanceRepository;

    private AttendanceDto entityToDto(Attendance attendance) {
        return new AttendanceDto(
                attendance.getId(),
                attendance.getChild().getId(),
                attendance.getDate(),
                attendance.getPresent()
                );
    }

    public AttendanceDtoList getAttendances(AttendanceRequest request) {
        List<AttendanceDto> attendanceDtoList = attendanceRepository.findByChildId(request.childId())
                                                                    .stream()
                                                                    .map(this::entityToDto)
                                                                    .toList();
        return new AttendanceDtoList(attendanceDtoList, attendanceDtoList.size());
    }

    public AttendanceDto updateAttendance(AttendanceRequest request) {
        LocalDate date = request.date().orElseThrow(()-> new RuntimeException("No date given"));
        Attendance attendance = attendanceRepository.findByChildIdAndDate(request.childId(), date).orElseThrow(()-> new RuntimeException("Attendance not found"));
        attendance.setPresent(request.present());
        return entityToDto(attendance);
    }
}

