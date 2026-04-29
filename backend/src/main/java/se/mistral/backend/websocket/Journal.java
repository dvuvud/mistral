package se.mistral.backend.websocket;

import java.time.LocalDate;

import se.mistral.backend.journal.JournalTarget;

record Journal(String targetType, long targetId, LocalDate date) implements Room {
    public static Journal parse(String[] parts) {
        if (parts.length != 4 || !parts[0].equals("journal")) {
            return null;
        }
        if (!parts[1].equals("child") && !parts[1].equals("group")) {
            return null;
        }
        
        try {
            long id = Long.parseLong(parts[2]);
            LocalDate date = LocalDate.parse(parts[3]);
            return new Journal(parts[1], id, date);
        } catch (Exception e) {
            return null;
        }
    }

    public JournalTarget toJournalTarget() {
        return switch (targetType) {
            case "child" -> new JournalTarget.Child(targetId);
            case "group" -> new JournalTarget.Group(targetId);
            default      -> throw new IllegalStateException();
        };
    }

    @Override public String toKey() {
        return "journal:" + targetType + ":" + targetId + ":" + date;
    }
}
