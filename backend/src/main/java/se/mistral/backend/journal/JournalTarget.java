package se.mistral.backend.journal;

public sealed interface JournalTarget permits JournalTarget.Child, JournalTarget.Group {
    record Child(Long childId) implements JournalTarget {}
    record Group(Long groupId) implements JournalTarget {}
}
