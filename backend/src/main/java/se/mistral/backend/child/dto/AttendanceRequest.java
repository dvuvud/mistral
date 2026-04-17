package se.mistral.backend.child.dto;

import java.time.LocalDate;

public record AttendanceRequest(
    LocalDate date
) { }
