package se.mistral.backend.attendance.dto;

import java.time.LocalDate;

public record AttendanceDto(Long id, Long childId, LocalDate date, Boolean present) {
}
