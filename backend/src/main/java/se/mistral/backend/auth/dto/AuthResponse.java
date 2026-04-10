package se.mistral.backend.auth.dto;

public record AuthResponse(
        String token,
        String email,
        String name,
        String role
        ) {}

