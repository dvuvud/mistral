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

    public ChildResponse createChild(CreateChildRequest request) {
        Child child = new Child();
        child.setName(request.name());
        Child saved = childRepository.save(child);
        return new ChildResponse(saved.getId(), saved.getName());
    }

    public List<ChildResponse> getAllChildren() {
        return childRepository.findAllIdsAndNames();
    }

    public List<AttendanceResponse> getAllChildrenWithAttendanceIfExists(LocalDate date) {
        return childRepository.findAllChildrenWithAttendanceIfExists(date);
    }

    public List<AttendanceResponse> getAllChildrenWithAttendanceIfExistsInGroup(LocalDate date, Long groupId) {
        return childRepository.findAllChildrenWithAttendanceIfExistsInGroup(date, groupId);
    }

    public List<ChildResponse> getChildrenByGroup(Long groupId) {
        return childRepository.findAllByGroupId(groupId);
    }

    public List<ChildWithGroupResponse> getAllChildrenWithGroup() {
        return childRepository.findAllWithGroup();
    }

    public void deleteChild(Long id) {
        if (!childRepository.existsById(id)) {
            throw new NotFoundException("Child not found");
        }
        childRepository.deleteById(id);
    }
}
