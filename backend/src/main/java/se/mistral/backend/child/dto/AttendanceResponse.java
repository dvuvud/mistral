package se.mistral.backend.child.dto;

import se.mistral.backend.attendance.AttendanceStatus;

import java.time.LocalDate;

public record AttendanceResponse(
    Long id,
    String name,
    LocalDate date,
    AttendanceStatus status
) { }
