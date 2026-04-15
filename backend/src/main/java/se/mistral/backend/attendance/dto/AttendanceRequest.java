package se.mistral.backend.attendance.dto;

import java.time.LocalDate;
import java.util.Optional;

public record AttendanceRequest(Long childId, Optional<LocalDate> date, Boolean present) {
}
