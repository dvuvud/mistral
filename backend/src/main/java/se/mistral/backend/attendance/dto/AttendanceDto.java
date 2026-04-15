package se.mistral.backend.attendance.dto;

import java.util.Date;

public record AttendanceDto(Long id, Long childId, Date date, Boolean precent) {
}
