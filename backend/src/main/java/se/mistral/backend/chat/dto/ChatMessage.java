package se.mistral.backend.chat.dto;

import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

public record ChatMessage(
        Long senderId,
        Long recipientId,
        @NotBlank
        String message,
        LocalDateTime timestamp
) { }