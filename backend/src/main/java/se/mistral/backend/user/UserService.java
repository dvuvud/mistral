package se.mistral.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import se.mistral.backend.user.dto.BasicUserInformation;

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
        return userRepository.findUserByRole_Teacher();
    }
}
