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

    public List<ChildResponse> getAllChildren() {
        return childRepository.findAllIdsAndNames();
    }

    public List<AttendanceResponse> getAllChildrenWithAttendanceIfExists(LocalDate date) {
        return childRepository.findAllChildrenWithAttendanceIfExists(date);
    }
}
