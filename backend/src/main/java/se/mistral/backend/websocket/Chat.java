package se.mistral.backend.websocket;

record Chat(long userOneId, long userTwoId) implements Room {
    public static Chat parse(String[] parts) {
        if (parts.length != 3 || !parts[0].equals("chat")) {
            return null;
        }

        try {
            long a = Long.parseLong(parts[1]);
            long b = Long.parseLong(parts[2]);
            return a < b ? new Chat(a, b) : new Chat(b, a); // lower id first
        } catch (NumberFormatException e) {
            return null;
        }
    }

    public boolean hasMember(long userId) {
        return userId == userOneId || userId == userTwoId;
    }

    public long otherMember(long userId) {
        return userId == userOneId ? userTwoId : userOneId;
    }

    @Override public String toKey() {
        return "chat:" + userOneId + ":" + userTwoId;
    }
}
