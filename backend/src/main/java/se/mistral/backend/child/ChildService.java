package se.mistral.backend.child;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import se.mistral.backend.child.dto.AttendanceResponse;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;

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
}
