package se.mistral.backend.attendance.dto;

import se.mistral.backend.attendance.AttendanceStatus;

import java.time.LocalDateTime;

public record AttendanceDto(
    AttendanceStatus status,
    LocalDateTime checkInTime,
    LocalDateTime checkOutTime
) { }
