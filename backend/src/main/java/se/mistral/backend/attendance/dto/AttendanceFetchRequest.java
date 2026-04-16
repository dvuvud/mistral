package se.mistral.backend.attendance.dto;

import java.time.LocalDate;

public record AttendanceFetchRequest(Long childId, LocalDate date) {
}
