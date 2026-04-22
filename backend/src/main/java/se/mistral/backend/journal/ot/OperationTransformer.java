package se.mistral.backend.journal.ot;

import org.springframework.stereotype.Component;

import static se.mistral.backend.journal.ot.Operation.Type.INSERT;
import static se.mistral.backend.journal.ot.Operation.Type.DELETE;

@Component
public class OperationTransformer {

    // returns `incoming` adjusted so it applies correctly after `concurrent`
    // has already been applied to the document.
    public Operation transform(Operation incoming, Operation concurrent) {
        return switch (incoming.getType()) {
            case INSERT -> transformInsert(incoming, concurrent);
            case DELETE -> transformDelete(incoming, concurrent);
        };
    }

    private Operation transformInsert(Operation incoming, Operation concurrent) {
        int pos = incoming.getPosition();

        switch (concurrent.getType()) {
            case INSERT -> {
                // concurrent insert at or before our position pushes us right
                if (concurrent.getPosition() <= pos) {
                    pos += concurrent.getText().length();
                }
            }
            case DELETE -> {
                // concurrent delete before our position pulls us left,
                // but never past the start of the deleted range
                if (concurrent.getPosition() < pos) {
                    pos = Math.max(concurrent.getPosition(), pos - concurrent.getLength());
                }
            }
        }

        return incoming.toBuilder().position(pos).build();
    }

    private Operation transformDelete(Operation incoming, Operation concurrent) {
        int pos = incoming.getPosition();
        int len = incoming.getLength();

        switch (concurrent.getType()) {
            case INSERT -> {
                if (concurrent.getPosition() <= pos) {
                    // concurrent insert is entirely before us: shift right
                    pos += concurrent.getText().length();
                } else if (concurrent.getPosition() < pos + len) {
                    // concurrent insert is inside our range: our delete gets longer
                    len += concurrent.getText().length();
                }
            }
            case DELETE -> {
                int concurrentPos = concurrent.getPosition();
                int concurrentLen = concurrent.getLength();

                if (concurrentPos + concurrentLen <= pos) {
                    // concurrent delete is entirely before us: shift left
                    pos -= concurrentLen;
                } else if (concurrentPos >= pos + len) {
                    // concurrent delete is entirely after us: no change needed
                } else {
                    // ranges overlap: shrink our delete by the overlapping characters
                    // that the concurrent op already removed
                    int overlapStart = Math.max(pos, concurrentPos);
                    int overlapEnd   = Math.min(pos + len, concurrentPos + concurrentLen);
                    len -= (overlapEnd - overlapStart);
                    pos  = Math.min(pos, concurrentPos);
                }
            }
        }

        return incoming.toBuilder().position(pos).length(Math.max(0, len)).build();
    }
}
