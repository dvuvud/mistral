package se.mistral.backend.chat;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import se.mistral.backend.chat.dto.ChatMessage;
import se.mistral.backend.chat.dto.RetrieveHistoryRequest;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Stream;


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

    public List<ChatMessage> retrieveHistory(RetrieveHistoryRequest retrieveHistoryRequest) {
        List<ChatMessage> sentHistory = chatRepository.findBySenderAndRecipient(
                retrieveHistoryRequest.senderId(),
                retrieveHistoryRequest.recipientId());

        List<ChatMessage> receivedHistory = chatRepository.findBySenderAndRecipient(
                retrieveHistoryRequest.recipientId(),
                retrieveHistoryRequest.senderId());

        List<ChatMessage> fullHistory = new java.util.ArrayList<>(Stream.concat(sentHistory.stream(), receivedHistory.stream()).toList());
        fullHistory.sort(Comparator.comparing(ChatMessage::timestamp));

        return fullHistory;
    }

}
