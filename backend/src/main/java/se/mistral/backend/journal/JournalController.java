package se.mistral.backend.journal;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import se.mistral.backend.journal.dto.JournalDto;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/journal")
@RequiredArgsConstructor
public class JournalController {

    private final JournalService journalService;

    @GetMapping
    public ResponseEntity<JournalDto> getJournal(
        @RequestParam(required = false) Long childId,
        @RequestParam(required = false) Long groupId,
        @RequestParam(required = false) LocalDate date) {

        LocalDate resolvedDate = date != null ? date : LocalDate.now();

        if (childId != null) {
            return ResponseEntity.ok(journalService.getOrCreate(new JournalTarget.Child(childId), resolvedDate));
        } else if (groupId != null) {
            return ResponseEntity.ok(journalService.getOrCreate(new JournalTarget.Group(groupId), resolvedDate));
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
