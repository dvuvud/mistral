package se.mistral.backend.grupp.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateGruppRequest(
    @NotBlank
    String name
) {
}
