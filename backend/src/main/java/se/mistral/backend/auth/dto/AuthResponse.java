package se.mistral.backend.auth.dto;

import se.mistral.backend.user.Role;

public record AuthResponse(
    String token,
    Long id,
    Role role
) { }

