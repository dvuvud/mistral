package se.mistral.backend.group.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateGroupRequest(
    @NotBlank
    String name
) {
}
