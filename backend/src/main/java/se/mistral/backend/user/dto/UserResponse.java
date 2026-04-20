package se.mistral.backend.user.dto;
import se.mistral.backend.user.Role;

public record UserResponse(
    Long id,
    String name,
    Role role,
    String email
) { }
