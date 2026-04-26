package se.mistral.backend.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import se.mistral.backend.user.dto.BasicUserInformation;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    @Query("SELECT new se.mistral.backend.user.dto.BasicUserInformation(user.id, user.name) " + 
           "FROM User user WHERE user.role = TEACHER")
    List<BasicUserInformation> findUserByRole_Teacher();
}
