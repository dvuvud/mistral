package se.mistral.backend.journal.dto;

import se.mistral.backend.journal.ot.Operation;

public record BroadcastMessage(
    String type,         // always "DOC_OPERATION"
    Operation operation, // the transformed op
    int serverRevision   // clients update their local revision to this value
) { }
