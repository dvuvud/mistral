package se.mistral.backend.attendance;

import jakarta.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "attendance", uniqueConstraints = {@UniqueConstraint(name = "UniqueChildIdAndDate", columnNames = {"child_id", "date"})})
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private long child_id;
    private Date date;
    private boolean present;
    @Version
    private Version version;

}
