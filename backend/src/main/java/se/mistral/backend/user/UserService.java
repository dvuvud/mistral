package se.mistral.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import se.mistral.backend.exception.NotFoundException;
import se.mistral.backend.user.dto.BasicUserInformation;
import se.mistral.backend.user.dto.UserResponse;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    /**
     * Find user by email.
     *
     * @param email the email
     * @return the optional user if they exist
     */
    public Optional<User> findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    /**
     * Retrieve all teachers.
     *
     * @return the list of all teachers.
     */
    public List<BasicUserInformation> retrieveAllTeachers() {
        return userRepository.findUserByRole(Role.TEACHER);
    }

    public UserResponse retrieveOneTeacher(Long teacherId) {
        return userRepository.findUserById(teacherId);
    }

    /**
     * Update a users color
     *
     * @param userid the user's id
     * @param color  the new color
     */
    public void updateColor(Long userId, String color) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("User not found"));
        user.setColor(color);
        userRepository.save(user);
    }

    public UserResponse retrieveOneTeacher(Long teacherId) {
        return userRepository.findUserById(teacherId);
    }
}
