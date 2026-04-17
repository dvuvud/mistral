package se.mistral.backend.child.dto;

import java.time.LocalDate;

public record AttendanceResponse(
    Long id,
    String name,
    LocalDate date,
    Boolean present
) { }
