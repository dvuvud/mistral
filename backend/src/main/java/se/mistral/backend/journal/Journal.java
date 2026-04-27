package se.mistral.backend.journal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

import org.hibernate.annotations.Check;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "journals")
@Check(constraints = "(child_id IS NOT NULL AND group_id IS NULL) OR (child_id IS NULL AND group_id IS NOT NULL)")
public class Journal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "child_id")
    private Long childId;

    @Column(name = "group_id")
    private Long groupId;

    @Column(nullable = false)
    @NotNull
    private LocalDate date;

    @Column(nullable = false, columnDefinition = "TEXT")
    @NotNull
    private String content;

    @Version
    private int version;
}
