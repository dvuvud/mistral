package se.mistral.backend.attendance.dto;

import jakarta.validation.constraints.NotNull;
import se.mistral.backend.attendance.AttendanceStatus;

import java.time.LocalDate;

public record AttendanceRequest(Long childId, LocalDate date, @NotNull AttendanceStatus status) {
}
