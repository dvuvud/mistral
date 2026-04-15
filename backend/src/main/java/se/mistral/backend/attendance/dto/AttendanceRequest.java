package se.mistral.backend.attendance.dto;

import java.util.Date;
import java.util.Optional;
import jakarta.validation.constraints.NotBlank;

public record AttendanceRequest(@NotBlank Long childId, Optional<Date> date, @NotBlank Boolean present) {
}
