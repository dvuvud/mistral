package se.mistral.backend.child;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.CascadeType;
import jakarta.validation.constraints.NotBlank;
import jakarta.persistence.JoinColumn;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.List;
import se.mistral.backend.attendance.Attendance;
import se.mistral.backend.grupp.Grupp;
import jakarta.persistence.Index;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "children", indexes = @Index(name = "idx_child_name", columnList = "grupp_id"))
public class Child {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "child", cascade = CascadeType.REMOVE)
    private List<Attendance> attendances;

    @ManyToOne
    @JoinColumn(name = "grupp_id")
    private Grupp grupp;

    @NotBlank
    private String name;
}
