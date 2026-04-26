package se.mistral.backend.chat;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import se.mistral.backend.chat.dto.ChatMessage;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;

    @GetMapping("/history")
    public ResponseEntity<List<ChatMessage>> retrieveHistory(@RequestParam long senderId, @RequestParam long recipientId) {
        return ResponseEntity.ok(chatService.retrieveHistory(senderId, recipientId));
    }

}
