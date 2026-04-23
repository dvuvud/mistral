package se.mistral.backend.auth.dto;

public record AuthResponse(
    String token,
    Long id
) { }

