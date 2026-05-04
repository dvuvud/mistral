package se.mistral.backend.websocket;

record Chat(long lowId, long highId) implements Room {
    /**
     * Parse input to see if it is a chat.
     * Return null otherwise
     *
     * @param parts the parts
     * @return the new chat
     */
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

    /**
     * Check if a chat has a member.
     *
     * @param userId the user id
     * @return true if the user is a member and false otherwise.
     */
    public boolean hasMember(long userId) {
        return userId == lowId || userId == highId;
    }

    /**
     * Gets the other member in a chat.
     *
     * @param userId the user id
     * @return the id of the other member.
     */
    public long otherMember(long userId) {
        return userId == lowId ? highId : lowId;
    }

    @Override public String toKey() {
        return "chat:" + lowId + ":" + highId;
    }
}
