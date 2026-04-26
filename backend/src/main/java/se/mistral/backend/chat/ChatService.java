package se.mistral.backend.chat;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import se.mistral.backend.chat.dto.ChatMessage;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ChatService {

    private final ChatRepository chatRepository;

    public ChatMessage saveMessage(ChatMessage chatMessage) {
        Chat chat = new Chat();
        chat.setChatMessage(chatMessage.chatMessage());
        chat.setSenderId(chatMessage.senderId());
        chat.setRecipientId(chatMessage.recipientId());
        chat.setTimestamp(chatMessage.timestamp());
        chatRepository.save(chat);
        return chatMessage;
    }

    public List<ChatMessage> retrieveHistory(long senderId, long recipientId) {
        return chatRepository.findConversationHistory(
                senderId,
                recipientId
        );
    }

}
