package se.mistral.backend.user.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record UpdateColorRequest(
    @NotBlank @Pattern(regexp = "^#[0-9A-Fa-f]{6}$") String color
) { }
