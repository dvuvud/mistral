package se.mistral.backend.journal.ot;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class Operation {

    public enum Type { INSERT, DELETE }

    private Type type;
    private int position;
    private String text;     // nullable for DELETE
    private Integer length;  // nullable for INSERT
}
