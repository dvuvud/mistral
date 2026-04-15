package se.mistral.backend.child;

import jakarta.persistence.*;
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
