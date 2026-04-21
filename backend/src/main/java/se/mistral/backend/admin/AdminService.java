package se.mistral.backend.admin;


import se.mistral.backend.child.ChildService;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import lombok.RequiredArgsConstructor;
import se.mistral.backend.exception.NotFoundException;
import se.mistral.backend.user.Role;
import se.mistral.backend.user.User;
import org.springframework.stereotype.Service;
import se.mistral.backend.user.UserRepository;
import se.mistral.backend.user.dto.UserResponse;

@RequiredArgsConstructor
@Service
public class AdminService {
    private final UserRepository userRepository;
    private final ChildService childService;

    public ChildResponse createChild(CreateChildRequest request) {
        return childService.createChild(request);
    }

    public UserResponse updateTeachers(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("User not found"));
        user.setRole(Role.TEACHER);
        user.setActive(true);
        User saved = userRepository.save(user);
        return new UserResponse(saved.getId(), saved.getName(), saved.getRole(), saved.getEmail());
    }
}
