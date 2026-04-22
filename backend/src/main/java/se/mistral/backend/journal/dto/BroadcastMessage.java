package se.mistral.backend.journal.dto;

import se.mistral.backend.journal.ot.Operation;

public record BroadcastMessage(
    String type,          // always "DOC_OPERATION"
    Operation operation,  // the transformed op
    int serverRevision,   // clients update their local revision to this value
    Long userId,          // required to decide whether to check in-flight buff locally
    Integer sequence      // used by client to keep track of change locally
) { }
