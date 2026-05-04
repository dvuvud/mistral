package se.mistral.backend.group;

import org.springframework.stereotype.Service;
import se.mistral.backend.child.ChildRepository;
import se.mistral.backend.child.Child;
import se.mistral.backend.group.dto.CreateGroupRequest;
import se.mistral.backend.group.dto.GroupResponse;
import lombok.RequiredArgsConstructor;
import se.mistral.backend.exception.NotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupService {

    private final GroupRepository groupRepository;
    private final ChildRepository childRepository;

    /**
     * Create a group.
     *
     * @param request the request
     * @return the group response of the created group
     */
    public GroupResponse createGroup(CreateGroupRequest request) {
        Group group = new Group();
        group.setName(request.name());
        group = groupRepository.save(group);
        return new GroupResponse(group.getId(), group.getName());
    }

    /**
     * Gets all groups.
     *
     * @return the list of all groups
     */
    public List<GroupResponse> getAllGroups() {
        return groupRepository.findAllGroups();
    }

    /**
     * Assign a child to a group.
     *
     * @param groupId the group id
     * @param childId the child id
     * @return the group response of the group the child was assigned to
     */
    public GroupResponse assignChildToGroup(Long groupId, Long childId) {
        Child child = childRepository.findById(childId).orElseThrow(() -> new NotFoundException("Child not found"));
        Group group = groupRepository.findById(groupId).orElseThrow(() -> new NotFoundException("Group not found"));
        child.setGroup(group);
        childRepository.save(child);
        return new GroupResponse(group.getId(), group.getName());
    }

}