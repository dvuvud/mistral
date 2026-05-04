package se.mistral.backend.journal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Optional;


/**
 * The interface Journal repository.
 */
@Repository
public interface JournalRepository extends JpaRepository<Journal, Long> {

    /**
     * Find by child id and date.
     *
     * @param childId the child id
     * @param date    the date
     * @return the journal of the child at the given date
     */
    Optional<Journal> findByChildIdAndDate(Long childId, LocalDate date);

    /**
     * Find by group id and date.
     *
     * @param groupId the group id
     * @param date    the date
     * @return the journal of the group at the given date
     */
    Optional<Journal> findByGroupIdAndDate(Long groupId, LocalDate date);
}
