package se.mistral.backend.websocket;

public sealed interface Room permits Chat, Journal {

    String toKey();

    static Room parse(String raw) {
        String[] parts = raw.split(":");
        Room room = Chat.parse(parts);
        return room != null ? room : Journal.parse(parts);
    }
}
