package se.mistral.backend.journal.ot;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Operation {

    public enum Type { INSERT, DELETE }

    private Type type;
    private int position;
    private String text;    // populated for INSERT, null for DELETE
    private int length;     // populated for DELETE, 0 for INSERT
}
