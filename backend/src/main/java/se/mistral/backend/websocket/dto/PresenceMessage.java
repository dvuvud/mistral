package se.mistral.backend.websocket.dto;

public record PresenceMessage(
    String type,        // "PRESENCE_JOIN" or "PRESENCE_LEAVE"
    String room,
    Long userId,
    String name
) { }
