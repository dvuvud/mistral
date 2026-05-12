package se.mistral.backend.admin;

import se.mistral.backend.child.ChildService;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.ChildWithGroupResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import lombok.RequiredArgsConstructor;
import se.mistral.backend.exception.NotFoundException;
import se.mistral.backend.user.User;
import org.springframework.stereotype.Service;
import se.mistral.backend.user.UserRepository;
import se.mistral.backend.user.dto.UserResponse;
import java.util.List;

@RequiredArgsConstructor
@Service
public class AdminService {
    private final UserRepository userRepository;
    private final ChildService childService;

    /**
     * Create a child.
     *
     * @param request the request
     * @return the created child response
     */
    public ChildResponse createChild(CreateChildRequest request) {
        return childService.createChild(request);
    }

    /**
     * Sets user active.
     *
     * @param id the id
     * @return the activated user
     */
    public UserResponse setUserActive(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("User not found"));
        user.setActive(true);
        User saved = userRepository.save(user);
        return new UserResponse(saved.getId(), saved.getName(), saved.getRole(), saved.getEmail(), saved.getColor());
    }

    /**
     * Gets all children in a group.
     *
     * @return the list of all children in a group
     */
    public UserResponse setUserInactive(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("User not found"));
        user.setActive(false);
        User saved = userRepository.save(user);
        return new UserResponse(saved.getId(), saved.getName(), saved.getRole(), saved.getEmail(), saved.getColor());
    }

    public List<UserResponse> getAllInactiveUsers() {
        return userRepository.findUserByActiveFalse();
    }

    public List<ChildWithGroupResponse> getAllChildrenWithGroup() {
        return childService.getAllChildrenWithGroup();
    }

    /**
     * Delete a child.
     *
     * @param id the id
     */
    public void deleteChild(Long id) {
        childService.deleteChild(id);
    }
}
