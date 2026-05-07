package se.mistral.backend.journal.ot;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OperationLogRepository extends JpaRepository<OperationLog, Long> {

    List<OperationLog> findByJournalIdAndRevisionGreaterThanAndUserIdNotOrderByRevisionAsc(
            Long journalId, int revision, Long userId);
}
