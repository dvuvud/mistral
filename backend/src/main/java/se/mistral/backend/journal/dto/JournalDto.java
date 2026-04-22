package se.mistral.backend.journal.dto;

public record JournalDto(
    String content,
    int serverRevision  // user stores this and sends it back with each operation
) { }
