package se.mistral.backend.journal;

import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import se.mistral.backend.exception.NotFoundException;
import se.mistral.backend.journal.dto.BroadcastMessage;
import se.mistral.backend.journal.dto.JournalDto;
import se.mistral.backend.journal.ot.Operation;
import se.mistral.backend.journal.ot.OperationLog;
import se.mistral.backend.journal.ot.OperationLogRepository;
import se.mistral.backend.journal.ot.OperationTransformer;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

import static se.mistral.backend.journal.ot.Operation.Type.INSERT;
import static se.mistral.backend.journal.ot.Operation.Type.DELETE;

@Service
@RequiredArgsConstructor
public class JournalService {

    private final JournalRepository journalRepository;
    private final OperationLogRepository operationLogRepository;
    private final OperationTransformer operationTransformer;

    // one lock object per journal to only sync threads editing the same document
    private final ConcurrentHashMap<Long, Object> journalLocks = new ConcurrentHashMap<>();

    public JournalDto getOrCreate(Long childId, LocalDate date) {
        Journal journal = findOrCreate(childId, date);
        return new JournalDto(journal.getContent(), journal.getVersion());
    }

    public BroadcastMessage applyOperation(Long childId, LocalDate date,
                                           int clientRevision, Operation incoming,
                                           Long userId, Integer sequence) {
        // get the journal id outside the lock
        Journal journal = findOrCreate(childId, date);
        Object lock = journalLocks.computeIfAbsent(journal.getId(), k -> new Object());

        synchronized (lock) {
            journal = journalRepository.findById(journal.getId()).orElseThrow(() -> new NotFoundException("Journal could not be found"));

            List<OperationLog> missed = operationLogRepository
                    .findByJournalIdAndRevisionGreaterThanOrderByRevisionAsc(
                            journal.getId(), clientRevision);

            // transform the incoming op through each missed op in order
            Operation transformed = incoming;
            for (OperationLog concurrent : missed) {
                transformed = operationTransformer.transform(transformed, concurrent.toOperation());
            }

            journal.setContent(applyToString(journal.getContent(), transformed));
            journal = journalRepository.save(journal);

            operationLogRepository.save(OperationLog.builder()
                    .journalId(journal.getId())
                    .revision(journal.getVersion())
                    .opType(transformed.getType())
                    .position(transformed.getPosition())
                    .text(transformed.getText())
                    .length(transformed.getLength())
                    .userId(userId)
                    .appliedAt(Instant.now())
                    .build());

            return new BroadcastMessage("DOC_OPERATION", transformed, journal.getVersion(), userId, sequence);
        }
    }

    // handles the race condition where two sessions open the same journal simultaneously
    private Journal findOrCreate(Long childId, LocalDate date) {
        return journalRepository.findByChildIdAndDate(childId, date)
                .orElseGet(() -> {
                    try {
                        return journalRepository.save(
                                Journal.builder()
                                        .childId(childId)
                                        .date(date)
                                        .content("")
                                        .build());
                    } catch (DataIntegrityViolationException e) {
                        return journalRepository.findByChildIdAndDate(childId, date)
                            .orElseThrow(() -> new NotFoundException("Journal could not be found")); // this will never be thrown
                    }
                });
    }

    private String applyToString(String content, Operation op) {
        int pos = Math.max(0, Math.min(op.getPosition(), content.length()));

        return switch (op.getType()) {
            case INSERT -> content.substring(0, pos) + op.getText() + content.substring(pos);
            case DELETE -> {
                int end = Math.min(pos + op.getLength(), content.length());
                yield content.substring(0, pos) + content.substring(end);
            }
        };
    }
}
