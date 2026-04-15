package se.mistral.backend.attendance;

import se.mistral.backend.child.Child;

import jakarta.persistence.*;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "attendance", uniqueConstraints = {@UniqueConstraint(name = "UniqueChildIdAndDate", columnNames = {"child_id", "date"})})
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private Boolean present;

    @Version
    private Long version;

    @ManyToOne
    @JoinColumn(name = "child_id")
    private Child child;
}

