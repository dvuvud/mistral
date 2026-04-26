package se.mistral.backend;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import se.mistral.backend.chat.ChatService;
import se.mistral.backend.chat.dto.ChatMessage;
import se.mistral.backend.chat.dto.RetrieveHistoryRequest;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class ChatTests {

    @Autowired
    private ChatService chatService;

    private final LocalDateTime testTime = LocalDateTime.parse("2026-04-01T12:00:00");
    private final LocalDateTime testTime2 = LocalDateTime.parse("2026-04-01T12:00:30");
    private final LocalDateTime testTime3 = LocalDateTime.parse("2026-04-01T12:01:00");
    private final LocalDateTime testTime4 = LocalDateTime.parse("2026-04-01T12:01:30");
    private final LocalDateTime testTime5 = LocalDateTime.parse("2026-04-01T12:02:00");
    private final LocalDateTime testTime6 = LocalDateTime.parse("2026-04-01T12:02:30");
    private final LocalDateTime testTime7 = LocalDateTime.parse("2026-04-01T12:03:00");
    private final LocalDateTime testTime8 = LocalDateTime.parse("2026-04-01T12:03:30");
    private final LocalDateTime testTime9 = LocalDateTime.parse("2026-04-01T12:04:00");
    private final LocalDateTime testTime10 = LocalDateTime.parse("2026-04-01T12:04:30");

    @Test
    void chatSaveMessageCorrectTest() {
        ChatMessage chatMessage = new ChatMessage(1L, 2L, "test", testTime);
        ChatMessage result = chatService.saveMessage(chatMessage);
        assertThat(result.senderId()).isEqualTo(1);
        assertThat(result.recipientId()).isEqualTo(2);
        assertThat(result.chatMessage()).isEqualTo("test");
        assertThat(result.timestamp()).isEqualTo(testTime);
    }

    @Test
    void retrieveHistoryEmptyTest() {
        RetrieveHistoryRequest retrieveHistoryRequest = new RetrieveHistoryRequest(1L, 2L);
        assertThat(chatService.retrieveHistory(retrieveHistoryRequest).isEmpty());
    }

    @Test
    void retrieveHistoryOneMessageTest() {
        ChatMessage chatMessage = new ChatMessage(1L, 2L, "test", testTime);
        ChatMessage result = chatService.saveMessage(chatMessage);
        assertThat(result).isNotNull();

        RetrieveHistoryRequest retrieveHistoryRequest = new RetrieveHistoryRequest(1L, 2L);
        List<ChatMessage> history = chatService.retrieveHistory(retrieveHistoryRequest);

        assertThat(!history.isEmpty());
        assertThat(history.size()).isEqualTo(1);

        assertThat(history.getFirst().senderId()).isEqualTo(1);
        assertThat(history.getFirst().recipientId()).isEqualTo(2);
        assertThat(history.getFirst().chatMessage()).isEqualTo("test");
        assertThat(history.getFirst().timestamp()).isEqualTo(testTime);
    }

    @Test
    void retrieveHistoryTwoMessagesFromSameSenderTest() {
        ChatMessage chatMessage = new ChatMessage(1L, 2L, "test", testTime);
        ChatMessage chatMessage2 = new ChatMessage(1L, 2L, "test2", testTime2);

        ChatMessage result = chatService.saveMessage(chatMessage);
        ChatMessage result2 = chatService.saveMessage(chatMessage2);

        assertThat(result).isNotNull();
        assertThat(result2).isNotNull();

        RetrieveHistoryRequest retrieveHistoryRequest = new RetrieveHistoryRequest(1L, 2L);
        List<ChatMessage> history = chatService.retrieveHistory(retrieveHistoryRequest);

        assertThat(!history.isEmpty());
        assertThat(history.size()).isEqualTo(2);

        assertThat(history.getFirst().senderId()).isEqualTo(1);
        assertThat(history.getFirst().recipientId()).isEqualTo(2);
        assertThat(history.getFirst().chatMessage()).isEqualTo("test");
        assertThat(history.getFirst().timestamp()).isEqualTo(testTime);

        assertThat(history.getLast().senderId()).isEqualTo(1);
        assertThat(history.getLast().recipientId()).isEqualTo(2);
        assertThat(history.getLast().chatMessage()).isEqualTo("test2");
        assertThat(history.getLast().timestamp()).isEqualTo(testTime2);
    }

    @Test
    void retrieveHistoryTwoMessagesFromDifferentSenderTest() {
        ChatMessage chatMessage = new ChatMessage(1L, 2L, "test", testTime);
        ChatMessage chatMessage2 = new ChatMessage(2L, 1L, "test2", testTime2);

        ChatMessage result = chatService.saveMessage(chatMessage);
        ChatMessage result2 = chatService.saveMessage(chatMessage2);

        assertThat(result).isNotNull();
        assertThat(result2).isNotNull();

        RetrieveHistoryRequest retrieveHistoryRequest = new RetrieveHistoryRequest(1L, 2L);
        List<ChatMessage> history = chatService.retrieveHistory(retrieveHistoryRequest);

        assertThat(!history.isEmpty());
        assertThat(history.size()).isEqualTo(2);

        assertThat(history.getFirst().senderId()).isEqualTo(1);
        assertThat(history.getFirst().recipientId()).isEqualTo(2);
        assertThat(history.getFirst().chatMessage()).isEqualTo("test");
        assertThat(history.getFirst().timestamp()).isEqualTo(testTime);

        assertThat(history.getLast().senderId()).isEqualTo(2);
        assertThat(history.getLast().recipientId()).isEqualTo(1);
        assertThat(history.getLast().chatMessage()).isEqualTo("test2");
        assertThat(history.getLast().timestamp()).isEqualTo(testTime2);
    }

    @Test
    void retrieveHistoryTwoMessagesFromDifferentSendersBothOrdersTest() {
        ChatMessage chatMessage = new ChatMessage(1L, 2L, "test", testTime);
        ChatMessage chatMessage2 = new ChatMessage(2L, 1L, "test2", testTime2);

        ChatMessage result = chatService.saveMessage(chatMessage);
        ChatMessage result2 = chatService.saveMessage(chatMessage2);

        assertThat(result).isNotNull();
        assertThat(result2).isNotNull();

        RetrieveHistoryRequest retrieveHistoryRequest = new RetrieveHistoryRequest(1L, 2L);
        List<ChatMessage> history = chatService.retrieveHistory(retrieveHistoryRequest);

        assertThat(!history.isEmpty());
        assertThat(history.size()).isEqualTo(2);

        assertThat(history.getFirst().senderId()).isEqualTo(1);
        assertThat(history.getFirst().recipientId()).isEqualTo(2);
        assertThat(history.getFirst().chatMessage()).isEqualTo("test");
        assertThat(history.getFirst().timestamp()).isEqualTo(testTime);

        assertThat(history.getLast().senderId()).isEqualTo(2);
        assertThat(history.getLast().recipientId()).isEqualTo(1);
        assertThat(history.getLast().chatMessage()).isEqualTo("test2");
        assertThat(history.getLast().timestamp()).isEqualTo(testTime2);

        RetrieveHistoryRequest retrieveHistoryRequest2 = new RetrieveHistoryRequest(2L, 1L);
        List<ChatMessage> history2 = chatService.retrieveHistory(retrieveHistoryRequest2);

        assertThat(!history2.isEmpty());
        assertThat(history2.size()).isEqualTo(2);

        assertThat(history2.getFirst().senderId()).isEqualTo(1);
        assertThat(history2.getFirst().recipientId()).isEqualTo(2);
        assertThat(history2.getFirst().chatMessage()).isEqualTo("test");
        assertThat(history2.getFirst().timestamp()).isEqualTo(testTime);

        assertThat(history2.getLast().senderId()).isEqualTo(2);
        assertThat(history2.getLast().recipientId()).isEqualTo(1);
        assertThat(history2.getLast().chatMessage()).isEqualTo("test2");
        assertThat(history2.getLast().timestamp()).isEqualTo(testTime2);
    }

    @Test
    void retrieveHistoryTwoMessagesFromDifferentSendersSameTimeTest() {
        ChatMessage chatMessage = new ChatMessage(1L, 2L, "test", testTime);
        ChatMessage chatMessage2 = new ChatMessage(2L, 1L, "test2", testTime);

        ChatMessage result = chatService.saveMessage(chatMessage);
        ChatMessage result2 = chatService.saveMessage(chatMessage2);

        assertThat(result).isNotNull();
        assertThat(result2).isNotNull();

        RetrieveHistoryRequest retrieveHistoryRequest = new RetrieveHistoryRequest(1L, 2L);
        List<ChatMessage> history = chatService.retrieveHistory(retrieveHistoryRequest);

        assertThat(!history.isEmpty());
        assertThat(history.size()).isEqualTo(2);

        assertThat(history.getFirst().senderId()).isEqualTo(1);
        assertThat(history.getFirst().recipientId()).isEqualTo(2);
        assertThat(history.getFirst().chatMessage()).isEqualTo("test");
        assertThat(history.getFirst().timestamp()).isEqualTo(testTime);

        assertThat(history.getLast().senderId()).isEqualTo(2);
        assertThat(history.getLast().recipientId()).isEqualTo(1);
        assertThat(history.getLast().chatMessage()).isEqualTo("test2");
        assertThat(history.getLast().timestamp()).isEqualTo(testTime);
    }

    @Test
    void retrieveHistoryTwoMessagesFromDifferentSendersSameTimeBothOrdersTest() {
        ChatMessage chatMessage = new ChatMessage(1L, 2L, "test", testTime);
        ChatMessage chatMessage2 = new ChatMessage(2L, 1L, "test2", testTime);

        ChatMessage result = chatService.saveMessage(chatMessage);
        ChatMessage result2 = chatService.saveMessage(chatMessage2);

        assertThat(result).isNotNull();
        assertThat(result2).isNotNull();

        RetrieveHistoryRequest retrieveHistoryRequest = new RetrieveHistoryRequest(1L, 2L);
        List<ChatMessage> history = chatService.retrieveHistory(retrieveHistoryRequest);

        assertThat(!history.isEmpty());
        assertThat(history.size()).isEqualTo(2);

        assertThat(history.getFirst().senderId()).isEqualTo(1);
        assertThat(history.getFirst().recipientId()).isEqualTo(2);
        assertThat(history.getFirst().chatMessage()).isEqualTo("test");
        assertThat(history.getFirst().timestamp()).isEqualTo(testTime);

        assertThat(history.getLast().senderId()).isEqualTo(2);
        assertThat(history.getLast().recipientId()).isEqualTo(1);
        assertThat(history.getLast().chatMessage()).isEqualTo("test2");
        assertThat(history.getLast().timestamp()).isEqualTo(testTime);

        RetrieveHistoryRequest retrieveHistoryRequest2 = new RetrieveHistoryRequest(2L, 1L);
        List<ChatMessage> history2 = chatService.retrieveHistory(retrieveHistoryRequest2);

        assertThat(!history2.isEmpty());
        assertThat(history2.size()).isEqualTo(2);

        assertThat(history2.getFirst().senderId()).isEqualTo(2);
        assertThat(history2.getFirst().recipientId()).isEqualTo(1);
        assertThat(history2.getFirst().chatMessage()).isEqualTo("test2");
        assertThat(history2.getFirst().timestamp()).isEqualTo(testTime);

        assertThat(history2.getLast().senderId()).isEqualTo(1);
        assertThat(history2.getLast().recipientId()).isEqualTo(2);
        assertThat(history2.getLast().chatMessage()).isEqualTo("test");
        assertThat(history2.getLast().timestamp()).isEqualTo(testTime);
    }

    @Test
    void retrieveHistoryTenMessagesFromDifferentSendersTest() {

        ChatMessage chatMessage1 = new ChatMessage(1L, 2L, "test", testTime);
        ChatMessage chatMessage2 = new ChatMessage(2L, 1L, "test2", testTime2);
        ChatMessage chatMessage3 = new ChatMessage(2L, 1L, "test3", testTime3);
        ChatMessage chatMessage4 = new ChatMessage(2L, 1L, "test4", testTime4);
        ChatMessage chatMessage5 = new ChatMessage(1L, 2L, "test5", testTime5);
        ChatMessage chatMessage6 = new ChatMessage(2L, 1L, "test6", testTime6);
        ChatMessage chatMessage7 = new ChatMessage(1L, 2L, "test7", testTime7);
        ChatMessage chatMessage8 = new ChatMessage(1L, 2L, "test8", testTime8);
        ChatMessage chatMessage9 = new ChatMessage(1L, 2L, "test9", testTime9);
        ChatMessage chatMessage10 = new ChatMessage(2L, 1L, "test10", testTime10);

        ChatMessage result1 = chatService.saveMessage(chatMessage1);
        ChatMessage result2 = chatService.saveMessage(chatMessage2);
        ChatMessage result3 = chatService.saveMessage(chatMessage3);
        ChatMessage result4 = chatService.saveMessage(chatMessage4);
        ChatMessage result5 = chatService.saveMessage(chatMessage5);
        ChatMessage result6 = chatService.saveMessage(chatMessage6);
        ChatMessage result7 = chatService.saveMessage(chatMessage7);
        ChatMessage result8 = chatService.saveMessage(chatMessage8);
        ChatMessage result9 = chatService.saveMessage(chatMessage9);
        ChatMessage result10 = chatService.saveMessage(chatMessage10);

        assertThat(result1).isNotNull();
        assertThat(result2).isNotNull();
        assertThat(result3).isNotNull();
        assertThat(result4).isNotNull();
        assertThat(result5).isNotNull();
        assertThat(result6).isNotNull();
        assertThat(result7).isNotNull();
        assertThat(result8).isNotNull();
        assertThat(result9).isNotNull();
        assertThat(result10).isNotNull();

        RetrieveHistoryRequest retrieveHistoryRequest = new RetrieveHistoryRequest(1L, 2L);
        List<ChatMessage> history = chatService.retrieveHistory(retrieveHistoryRequest);

        assertThat(!history.isEmpty());
        assertThat(history.size()).isEqualTo(10);

        assertThat(history.getFirst().senderId()).isEqualTo(1);
        assertThat(history.getFirst().recipientId()).isEqualTo(2);
        assertThat(history.getFirst().chatMessage()).isEqualTo("test");
        assertThat(history.getFirst().timestamp()).isEqualTo(testTime);

        assertThat(history.getLast().senderId()).isEqualTo(2);
        assertThat(history.getLast().recipientId()).isEqualTo(1);
        assertThat(history.getLast().chatMessage()).isEqualTo("test10");
        assertThat(history.getLast().timestamp()).isEqualTo(testTime10);
    }

    @Test
    void retrieveHistoryTwoTwoMessageHistoriesTest() {
        ChatMessage chatMessage = new ChatMessage(1L, 2L, "test", testTime);
        ChatMessage chatMessage2 = new ChatMessage(2L, 1L, "test2", testTime2);
        ChatMessage chatMessage3 = new ChatMessage(1L, 3L, "Hi 3", testTime3);
        ChatMessage chatMessage4 = new ChatMessage(3L, 1L, "Hi 1", testTime4);

        ChatMessage result1 = chatService.saveMessage(chatMessage);
        ChatMessage result2 = chatService.saveMessage(chatMessage2);
        ChatMessage result3 = chatService.saveMessage(chatMessage3);
        ChatMessage result4 = chatService.saveMessage(chatMessage4);

        assertThat(result1).isNotNull();
        assertThat(result2).isNotNull();
        assertThat(result3).isNotNull();
        assertThat(result4).isNotNull();

        RetrieveHistoryRequest retrieveHistoryRequest = new RetrieveHistoryRequest(1L, 2L);
        List<ChatMessage> history = chatService.retrieveHistory(retrieveHistoryRequest);

        assertThat(!history.isEmpty());
        assertThat(history.size()).isEqualTo(2);

        assertThat(history.getFirst().senderId()).isEqualTo(1);
        assertThat(history.getFirst().recipientId()).isEqualTo(2);
        assertThat(history.getFirst().chatMessage()).isEqualTo("test");
        assertThat(history.getFirst().timestamp()).isEqualTo(testTime);

        assertThat(history.getLast().senderId()).isEqualTo(2);
        assertThat(history.getLast().recipientId()).isEqualTo(1);
        assertThat(history.getLast().chatMessage()).isEqualTo("test2");
        assertThat(history.getLast().timestamp()).isEqualTo(testTime2);

        RetrieveHistoryRequest retrieveHistoryRequest2 = new RetrieveHistoryRequest(1L, 3L);
        List<ChatMessage> history2 = chatService.retrieveHistory(retrieveHistoryRequest2);

        assertThat(!history2.isEmpty());
        assertThat(history2.size()).isEqualTo(2);

        assertThat(history2.getFirst().senderId()).isEqualTo(1);
        assertThat(history2.getFirst().recipientId()).isEqualTo(3);
        assertThat(history2.getFirst().chatMessage()).isEqualTo("Hi 3");
        assertThat(history2.getFirst().timestamp()).isEqualTo(testTime3);

        assertThat(history2.getLast().senderId()).isEqualTo(3);
        assertThat(history2.getLast().recipientId()).isEqualTo(1);
        assertThat(history2.getLast().chatMessage()).isEqualTo("Hi 1");
        assertThat(history2.getLast().timestamp()).isEqualTo(testTime4);
    }

}
