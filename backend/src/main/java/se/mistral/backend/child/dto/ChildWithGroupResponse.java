package se.mistral.backend.child.dto;

import se.mistral.backend.group.dto.GroupResponse;

public record ChildWithGroupResponse(
    Long id,
    String name,
    GroupResponse group
) { }
