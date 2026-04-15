package se.mistral.backend.attendance.dto;

import java.time.LocalDate;
import java.util.Optional;

public record AttendanceRequest(Long childId, LocalDate date, Boolean present) {
}
