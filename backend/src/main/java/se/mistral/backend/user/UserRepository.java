package se.mistral.backend.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import se.mistral.backend.user.dto.BasicUserInformation;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    /**
     * Find user by email if email exists.
     *
     * @param email the email
     * @return the optional user
     */
    Optional<User> findByEmail(String email);

    /**
     * Check if the email exists in the database.
     *
     * @param email the email
     * @return the boolean if the email exists or not.
     */
    boolean existsByEmail(String email);

    /**
     * Find user by role teacher.
     *
     * @return the list of all teachers
     */
    @Query("SELECT new se.mistral.backend.user.dto.BasicUserInformation(user.id, user.name) " +
           "FROM User user WHERE user.role = TEACHER")
    List<BasicUserInformation> findUserByRole_Teacher();
}
