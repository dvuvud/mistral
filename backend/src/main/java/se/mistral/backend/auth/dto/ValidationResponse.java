package se.mistral.backend.auth.dto;

import se.mistral.backend.user.Role;

public record ValidationResponse(
        Role role) {
}
