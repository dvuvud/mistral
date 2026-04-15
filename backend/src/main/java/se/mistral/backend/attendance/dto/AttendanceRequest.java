package se.mistral.backend.attendance.dto;

import java.time.LocalDate;
import java.util.Optional;
import jakarta.validation.constraints.NotBlank;

public record AttendanceRequest(@NotBlank Long childId, Optional<LocalDate> date, @NotBlank Boolean present) {
}
