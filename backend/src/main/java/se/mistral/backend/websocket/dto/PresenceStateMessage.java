package se.mistral.backend.websocket.dto;

import java.util.List;

public record PresenceStateMessage(
    String type,        // always "PRESENCE_STATE"
    String room,
    List<PresenceUser> users
) { }

