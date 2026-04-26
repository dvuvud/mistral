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

    public Optional<User> findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<BasicUserInformation> retrieveAllTeachers() {
        return userRepository.findUserByRole_Teacher();
    }
}
