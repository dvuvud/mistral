package se.mistral.backend.attendance.dto;

import java.time.LocalDate;

public record AttendancesRequest(LocalDate date) {
}
