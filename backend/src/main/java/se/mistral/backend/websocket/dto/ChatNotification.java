package se.mistral.backend.websocket.dto;

public record ChatNotification(
    String type,        // "NOTIFICATION"
    Long senderId
) { }

