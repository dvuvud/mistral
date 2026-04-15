package se.mistral.backend.child.dto;
import jakarta.validation.constraints.NotBlank;

public record CreateChildRequest(@NotBlank String name){}
