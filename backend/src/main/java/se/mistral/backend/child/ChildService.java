package se.mistral.backend.child;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import se.mistral.backend.child.dto.AttendanceResponse;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.ChildWithGroupResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import se.mistral.backend.exception.NotFoundException;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ChildService {

    private final ChildRepository childRepository;

    /**
     * Create a child.
     *
     * @param request the request
     * @return the created child
     */
    public ChildResponse createChild(CreateChildRequest request) {
        Child child = new Child();
        child.setName(request.name());
        Child saved = childRepository.save(child);
        return new ChildResponse(saved.getId(), saved.getName());
    }

    /**
     * Gets all children.
     *
     * @return all children
     */
    public List<ChildResponse> getAllChildren() {
        return childRepository.findAllIdsAndNames();
    }

    /**
     * Gets all children on a given date
     *
     * @param date the date
     * @return the attendance list of all children registered on the date.
     */
    public List<AttendanceResponse> getAllChildrenWithAttendanceIfExists(LocalDate date) {
        return childRepository.findAllChildrenWithAttendanceIfExists(date);
    }

    /**
     * Gets all children on a given date in a group.
     *
     * @param date    the date
     * @param groupId the group id
     * @return the attendance list of all children registered on the date in the group.
     */
    public List<AttendanceResponse> getAllChildrenWithAttendanceIfExistsInGroup(LocalDate date, Long groupId) {
        return childRepository.findAllChildrenWithAttendanceIfExistsInGroup(date, groupId);
    }

    /**
     * Gets children by group.
     *
     * @param groupId the group id
     * @return the list of all children in the group
     */
    public List<ChildResponse> getChildrenByGroup(Long groupId) {
        return childRepository.findAllByGroupId(groupId);
    }

    /**
     * Gets all children by group.
     *
     * @return the list of all children in the group, with group information
     */
    public List<ChildWithGroupResponse> getAllChildrenWithGroup() {
        return childRepository.findAllWithGroup();
    }

    /**
     * Delete child.
     *
     * @param id the id
     */
    public void deleteChild(Long id) {
        if (!childRepository.existsById(id)) {
            throw new NotFoundException("Child not found");
        }
        childRepository.deleteById(id);
    }
}
