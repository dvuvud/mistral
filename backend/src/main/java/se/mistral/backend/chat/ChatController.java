package se.mistral.backend.chat;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.mistral.backend.chat.dto.ChatMessage;
import se.mistral.backend.chat.dto.RetrieveHistoryRequest;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;

    @PostMapping("/save")
    public ResponseEntity<ChatMessage> saveChatMessage(@Valid @RequestBody ChatMessage chatMessage) {
        return ResponseEntity.ok(chatService.saveMessage(chatMessage));
    }

    @GetMapping("/history")
    public ResponseEntity<List<ChatMessage>> retrieveHistory(@Valid @RequestBody RetrieveHistoryRequest retrieveHistoryRequest) {
        return ResponseEntity.ok(chatService.retrieveHistory(retrieveHistoryRequest));
    }

}
