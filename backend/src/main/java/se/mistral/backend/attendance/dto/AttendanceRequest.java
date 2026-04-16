package se.mistral.backend.attendance.dto;

import java.time.LocalDate;

public record AttendanceRequest(Long childId, LocalDate date, Boolean present) {
}
