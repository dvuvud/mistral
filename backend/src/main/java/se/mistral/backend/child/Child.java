package se.mistral.backend.child;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.CascadeType;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.List;
import se.mistral.backend.attendance.Attendance;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "children")
public class Child {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "child", cascade = CascadeType.REMOVE)
    private List<Attendance> attendances;

    @NotBlank
    private String name;
}
