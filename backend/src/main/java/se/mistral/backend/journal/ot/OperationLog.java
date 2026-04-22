package se.mistral.backend.journal.ot;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "operation_log")
public class OperationLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "journal_id", nullable = false)
    private Long journalId;

    @Column(nullable = false)
    private int revision;

    @Enumerated(EnumType.STRING)
    @Column(name = "op_type", nullable = false)
    private Operation.Type opType;

    @Column(nullable = false)
    private int position;

    private String text;

    private Integer length;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "applied_at", nullable = false)
    private Instant appliedAt;

    // reconstruct an Operation object from this log row
    public Operation toOperation() {
        return Operation.builder()
                .type(opType)
                .position(position)
                .text(text)
                .length(length != null ? length : 0)
                .build();
    }
}
