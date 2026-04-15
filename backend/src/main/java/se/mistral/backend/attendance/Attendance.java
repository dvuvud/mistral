package se.mistral.backend.attendance;

import jakarta.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import se.mistral.backend.child.Child;

import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "attendance", uniqueConstraints = {@UniqueConstraint(name = "UniqueChildIdAndDate", columnNames = {"child_id", "date"})})
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "child_id")
    private Child child;
    private Date date;
    private Boolean present;
    @Version
    private Long version;

    public Attendance(Long child_id, Date date, boolean present) {

    }
}
