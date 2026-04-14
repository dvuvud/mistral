package se.mistral.backend.child;

import org.springframework.stereotype.Service;

import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class ChildService {

    private final ChildRepository childRepository;

    public ChildService(ChildRepository childRepository) {
        this.childRepository = childRepository;
    }
    
    public ChildResponse createChild(CreateChildRequest request) {
        Child child = new Child();
        child.setName(request.getName());
        Child saved = childRepository.save(child);
        return new ChildResponse(saved.getId(), saved.getName());
    }

        public List<ChildResponse> getAllChildren() {
            return childRepository.findAll().stream()
                    .map(child -> new ChildResponse(child.getId(), child.getName()))
                    .collect(Collectors.toList());
        }
}