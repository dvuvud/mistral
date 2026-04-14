package se.mistral.backend.child.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotBlank;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateChildRequest {
    
    @NotBlank
    private String name;
}
