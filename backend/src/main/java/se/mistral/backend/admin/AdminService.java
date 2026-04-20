package se.mistral.backend.admin;

import se.mistral.backend.child.Child;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import lombok.RequiredArgsConstructor;
import se.mistral.backend.user.Role;
import se.mistral.backend.user.User;
import org.springframework.stereotype.Service;
import se.mistral.backend.child.ChildRepository;
import se.mistral.backend.user.UserRepository;
import se.mistral.backend.user.dto.UserResponse;

@RequiredArgsConstructor
@Service
public class AdminService {
    private final ChildRepository childRepository;
    private final UserRepository userRepository;

    public ChildResponse createChild(CreateChildRequest request) {
        Child child = new Child();
        child.setName(request.name());
        Child saved = childRepository.save(child);
        return new ChildResponse(saved.getId(), saved.getName());
    }

    public UserResponse updateTeachers(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setRole(Role.TEACHER);
        User saved = userRepository.save(user);
        return new UserResponse(saved.getId(), saved.getName(), saved.getRole(), saved.getEmail());
    }

    public String swapGroup() {
        return "Not implemented yet";
    }

}
