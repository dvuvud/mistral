package se.mistral.backend.chat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import se.mistral.backend.chat.dto.ChatMessage;

import java.util.List;

@Repository
public interface ChatRepository extends JpaRepository<Chat, Long> {
    @Query("""
    SELECT chat FROM Chat chat
    WHERE (chat.senderId = :user1 AND chat.recipientId = :user2)
       OR (chat.senderId = :user2 AND chat.recipientId = :user1)
    ORDER BY chat.timestamp ASC
""")
    List<ChatMessage> findConversationHistory(Long senderId, Long recipientId);
}
