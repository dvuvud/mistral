package se.mistral.backend.journal.ot;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OperationLogRepository extends JpaRepository<OperationLog, Long> {

    // fetches every server op the client has NOT yet seen, in the order they were applied.
    List<OperationLog> findByJournalIdAndRevisionGreaterThanOrderByRevisionAsc(
            Long journalId, int revision);
}
