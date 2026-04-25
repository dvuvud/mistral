package se.mistral.backend.chat.dto;

public record RetrieveHistoryRequest(
        Long senderId,
        Long recipientId
) { }
