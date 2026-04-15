package se.mistral.backend.attendance.dto;

import java.util.List;

public record AttendanceDtoList(List<AttendanceDto> attendanceDtoList, Integer count) {
}
