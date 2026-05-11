package se.mistral.backend;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.clearInvocations;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import se.mistral.backend.auth.JwtService;
import se.mistral.backend.chat.dto.ChatMessage;
import se.mistral.backend.child.ChildService;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import se.mistral.backend.group.GroupService;
import se.mistral.backend.group.dto.CreateGroupRequest;
import se.mistral.backend.group.dto.GroupResponse;
import se.mistral.backend.journal.JournalService;
import se.mistral.backend.journal.JournalTarget;
import se.mistral.backend.journal.dto.JournalDto;
import se.mistral.backend.user.Role;
import se.mistral.backend.user.User;
import se.mistral.backend.user.UserRepository;
import se.mistral.backend.websocket.MyWebSocketHandler;

@SpringBootTest
@Transactional
public class WebSocketHandlerTests {

    @Autowired
    private MyWebSocketHandler handler;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ChildService childService;
    @Autowired
    private GroupService groupService;
    @Autowired
    private JournalService journalService;

    private final ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());

    private static final LocalDate DATE = LocalDate.now();

    private User userA;
    private User userB;
    private String tokenA;
    private String tokenB;

    @BeforeEach
    void setUp() {
        userA = userRepository.save(User.builder()
                .name("User A")
                .email("user-a@test.com")
                .password("ignored")
                .role(Role.TEACHER)
                .color("#ff0000")
                .build());

        userB = userRepository.save(User.builder()
                .name("User B")
                .email("user-b@test.com")
                .password("ignored")
                .role(Role.TEACHER)
                .color("#0000ff")
                .build());

        tokenA = jwtService.generateToken(userA);
        tokenB = jwtService.generateToken(userB);
    }

    @Test
    void validTokenShouldStoreUserAttributesOnSession() throws Exception {
        final WebSocketSession session = mockSession(tokenA);

        handler.afterConnectionEstablished(session);

        final Map<String, Object> attrs = session.getAttributes();
        assertThat(attrs.get("userId")).isEqualTo(userA.getId());
        assertThat(attrs.get("userName")).isEqualTo("User A");
        assertThat(attrs.get("userColor")).isEqualTo("#ff0000");
    }

    @Test
    void validTokenShouldSendPresenceState() throws Exception {
        final WebSocketSession session = mockSession(tokenA);

        handler.afterConnectionEstablished(session);

        final ArgumentCaptor<TextMessage> captor = ArgumentCaptor.forClass(TextMessage.class);
        verify(session, atLeastOnce()).sendMessage(captor.capture());
        assertThat(captor.getValue().getPayload()).contains("PRESENCE_STATE");
    }

    @Test
    void missingTokenShouldCloseSession() throws Exception {
        final WebSocketSession session = mockSession(null);

        handler.afterConnectionEstablished(session);

        verify(session).close(CloseStatus.NOT_ACCEPTABLE);
    }

    @Test
    void invalidTokenShouldCloseSession() throws Exception {
        final WebSocketSession session = mockSession("not.a.valid.token");

        handler.afterConnectionEstablished(session);

        verify(session).close(CloseStatus.NOT_ACCEPTABLE);
    }

    @Test
    void subscribeToJournalShouldBroadcastPresenceJoin() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);
        final WebSocketSession sessionB = openSession(tokenB);

        final ChildResponse child = childService.createChild(new CreateChildRequest("ws-test-child"));
        final String room = "journal:child:" + child.id() + ":" + DATE;

        subscribe(sessionB, room);
        clearInvocations(sessionB);

        subscribe(sessionA, room);

        final ArgumentCaptor<TextMessage> captor = ArgumentCaptor.forClass(TextMessage.class);
        verify(sessionB, atLeastOnce()).sendMessage(captor.capture());
        assertThat(captor.getValue().getPayload()).contains("PRESENCE_JOIN");
        assertThat(captor.getValue().getPayload()).contains(userA.getId().toString());
    }

    @Test
    void unsubscribeFromJournalShouldBroadcastPresenceLeave() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);
        final WebSocketSession sessionB = openSession(tokenB);

        final ChildResponse child = childService.createChild(new CreateChildRequest("ws-test-child"));
        final String room = "journal:child:" + child.id() + ":" + DATE;

        subscribe(sessionA, room);
        subscribe(sessionB, room);
        clearInvocations(sessionA, sessionB);

        unsubscribe(sessionA, room);

        final ArgumentCaptor<TextMessage> captor = ArgumentCaptor.forClass(TextMessage.class);
        verify(sessionB, atLeastOnce()).sendMessage(captor.capture());
        assertThat(captor.getValue().getPayload()).contains("PRESENCE_LEAVE");
    }

    @Test
    void subscribeToChatAsNonMemberShouldCloseSession() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);

        final String room = "chat:" + userB.getId() + ":" + (userB.getId() + 99);
        subscribe(sessionA, room);

        verify(sessionA).close(CloseStatus.NOT_ACCEPTABLE);
    }

    @Test
    void subscribeToChatAsMemberShouldSucceed() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);

        final String room = "chat:" + userA.getId() + ":" + userB.getId();
        subscribe(sessionA, room);

        verify(sessionA, never()).close(any());
    }

    @Test
    void closingSessionShouldBroadcastPresenceLeaveForAllJoinedRooms() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);
        final WebSocketSession sessionB = openSession(tokenB);

        final ChildResponse child = childService.createChild(new CreateChildRequest("ws-test-child"));
        final String room = "journal:child:" + child.id() + ":" + DATE;

        subscribe(sessionA, room);
        subscribe(sessionB, room);
        clearInvocations(sessionA, sessionB);

        handler.afterConnectionClosed(sessionA, CloseStatus.NORMAL);

        final ArgumentCaptor<TextMessage> captor = ArgumentCaptor.forClass(TextMessage.class);
        verify(sessionB, atLeastOnce()).sendMessage(captor.capture());
        assertThat(captor.getValue().getPayload()).contains("PRESENCE_LEAVE");
    }

    @Test
    void closingSessionWithNoRoomsShouldNotThrow() throws Exception {
        final WebSocketSession session = mockSession(null);

        handler.afterConnectionClosed(session, CloseStatus.NORMAL);

        verify(session, never()).sendMessage(any());
    }

    @Test
    void validChatMessageShouldBeDeliveredToRecipient() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);
        final WebSocketSession sessionB = openSession(tokenB);

        final String room = "chat:" + userA.getId() + ":" + userB.getId();
        subscribe(sessionA, room);
        subscribe(sessionB, room);
        clearInvocations(sessionA, sessionB);

        final String payload = objectMapper.writeValueAsString(new SocketMessage(
                "CHAT_MESSAGE",
                room,
                new ChatMessage(
                        userA.getId(),
                        userB.getId(),
                        "hello",
                        LocalDateTime.now())));

        handler.handleTextMessage(sessionA, new TextMessage(payload));

        final ArgumentCaptor<TextMessage> captor = ArgumentCaptor.forClass(TextMessage.class);
        verify(sessionB, atLeastOnce()).sendMessage(captor.capture());
        verify(sessionA, never()).sendMessage(any());

        final String received = captor.getValue().getPayload();
        assertThat(received).contains("hello");
        assertThat(received).contains(userA.getId().toString());
    }

    @Test
    void chatMessageToNonChatRoomShouldCloseSession() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);

        final String payload = objectMapper.writeValueAsString(new SocketMessage(
                "CHAT_MESSAGE",
                "journal:child:1:2026-01-01",
                new ChatMessage(
                        userA.getId(),
                        userB.getId(),
                        "hello",
                        LocalDateTime.now())));

        handler.handleTextMessage(sessionA, new TextMessage(payload));

        verify(sessionA).close(CloseStatus.NOT_ACCEPTABLE);
    }

    @Test
    void chatMessageWithSpoofedSenderIdShouldCloseSession() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);

        final String payload = objectMapper.writeValueAsString(new SocketMessage(
                "CHAT_MESSAGE",
                "chat:" + userA.getId() + ":" + userB.getId(),
                new ChatMessage(
                        userB.getId(),
                        userA.getId(),
                        "hello",
                        LocalDateTime.now())));

        handler.handleTextMessage(sessionA, new TextMessage(payload));

        verify(sessionA).close(CloseStatus.NOT_ACCEPTABLE);
    }

    @Test
    void chatMessageWithWrongRecipientShouldCloseSession() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);

        final String payload = objectMapper.writeValueAsString(new SocketMessage(
                "CHAT_MESSAGE",
                "chat:" + userA.getId() + ":" + userB.getId(),
                new ChatMessage(
                        userA.getId(),
                        userA.getId(),
                        "hello",
                        LocalDateTime.now())));

        handler.handleTextMessage(sessionA, new TextMessage(payload));

        verify(sessionA).close(CloseStatus.NOT_ACCEPTABLE);
    }

    @Test
    void validDocOperationShouldBeBroadcastToAllSubscribers() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);
        final WebSocketSession sessionB = openSession(tokenB);

        final ChildResponse child = childService.createChild(new CreateChildRequest("ws-test-child"));
        final String room = "journal:child:" + child.id() + ":" + DATE;

        subscribe(sessionA, room);
        subscribe(sessionB, room);
        clearInvocations(sessionA, sessionB);

        handler.handleTextMessage(sessionA, docOperation(room, 0, insertOp(0, "hello"), null));

        final ArgumentCaptor<TextMessage> captorA = ArgumentCaptor.forClass(TextMessage.class);
        final ArgumentCaptor<TextMessage> captorB = ArgumentCaptor.forClass(TextMessage.class);
        verify(sessionA, atLeastOnce()).sendMessage(captorA.capture());
        verify(sessionB, atLeastOnce()).sendMessage(captorB.capture());

        assertThat(captorA.getValue().getPayload()).contains("DOC_OPERATION");
        assertThat(captorB.getValue().getPayload()).contains("DOC_OPERATION");
    }

    @Test
    void docOperationShouldPersistContentToJournal() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);

        final ChildResponse child = childService.createChild(new CreateChildRequest("ws-test-child"));
        final String room = "journal:child:" + child.id() + ":" + DATE;
        subscribe(sessionA, room);

        handler.handleTextMessage(sessionA, docOperation(room, 0, insertOp(0, "hello"), 1));

        final JournalDto dto = journalService.getOrCreate(new JournalTarget.Child(child.id()), DATE);
        assertThat(dto.content()).isEqualTo("hello");
    }

    @Test
    void docOperationBroadcastShouldIncludeServerRevisionAndUserId() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);

        final ChildResponse child = childService.createChild(new CreateChildRequest("ws-test-child"));
        final String room = "journal:child:" + child.id() + ":" + DATE;
        subscribe(sessionA, room);
        clearInvocations(sessionA);

        handler.handleTextMessage(sessionA, docOperation(room, 0, insertOp(0, "hello"), 5));

        final ArgumentCaptor<TextMessage> captor = ArgumentCaptor.forClass(TextMessage.class);
        verify(sessionA, atLeastOnce()).sendMessage(captor.capture());

        final String payload = captor.getValue().getPayload();
        assertThat(payload).contains("serverRevision");
        assertThat(payload).contains(userA.getId().toString());
        assertThat(payload).contains("5");
    }

    @Test
    void docOperationOnGroupJournalShouldPersistContent() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);

        final GroupResponse group = groupService.createGroup(new CreateGroupRequest("ws-test-group"));
        final String room = "journal:group:" + group.id() + ":" + DATE;
        subscribe(sessionA, room);

        handler.handleTextMessage(sessionA, docOperation(room, 0, insertOp(0, "group note"), null));

        final JournalDto dto = journalService.getOrCreate(new JournalTarget.Group(group.id()), DATE);
        assertThat(dto.content()).isEqualTo("group note");
    }

    @Test
    void docOperationToNonJournalRoomShouldBeIgnored() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);

        final String room = "chat:" + userA.getId() + ":" + userB.getId();

        handler.handleTextMessage(sessionA, docOperation(room, 0, insertOp(0, "hello"), null));

        verify(sessionA).close(any());
    }

    @Test
    void sequentialDocOperationsShouldAccumulateInJournal() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);

        final ChildResponse child = childService.createChild(new CreateChildRequest("ws-test-child"));
        final String room = "journal:child:" + child.id() + ":" + DATE;
        subscribe(sessionA, room);

        handler.handleTextMessage(sessionA, docOperation(room, 0, insertOp(0, "hello"), 1));
        handler.handleTextMessage(sessionA, docOperation(room, 1, insertOp(5, " world"), 2));

        final JournalDto dto = journalService.getOrCreate(new JournalTarget.Child(child.id()), DATE);
        assertThat(dto.content()).isEqualTo("hello world");
    }

    @Test
    void deleteDocOperationShouldRemoveContentFromJournal() throws Exception {
        final WebSocketSession sessionA = openSession(tokenA);

        final ChildResponse child = childService.createChild(new CreateChildRequest("ws-test-child"));
        final String room = "journal:child:" + child.id() + ":" + DATE;
        subscribe(sessionA, room);

        handler.handleTextMessage(sessionA, docOperation(room, 0, insertOp(0, "hello world"), 1));
        handler.handleTextMessage(sessionA, docOperation(room, 1, deleteOp(5, 6), 2));

        final JournalDto dto = journalService.getOrCreate(new JournalTarget.Child(child.id()), DATE);
        assertThat(dto.content()).isEqualTo("hello");
    }

    private WebSocketSession mockSession(final String token) throws IOException {
        final WebSocketSession session = mock(WebSocketSession.class);
        final Map<String, Object> attrs = new HashMap<>();
        if (token != null) {
            attrs.put("token", token);
        }
        when(session.getAttributes()).thenReturn(attrs);
        when(session.isOpen()).thenReturn(true);
        return session;
    }

    private WebSocketSession openSession(final String token) throws Exception {
        final WebSocketSession session = mockSession(token);
        handler.afterConnectionEstablished(session);
        return session;
    }

    private void subscribe(final WebSocketSession session, final String room) throws Exception {
        final String payload = objectMapper.writeValueAsString(Map.of(
                "type", "subscribe",
                "room", room));
        handler.handleTextMessage(session, new TextMessage(payload));
    }

    private void unsubscribe(final WebSocketSession session, final String room) throws Exception {
        final String payload = objectMapper.writeValueAsString(Map.of(
                "type", "unsubscribe",
                "room", room));
        handler.handleTextMessage(session, new TextMessage(payload));
    }

    private TextMessage docOperation(final String room, final int clientRevision, final Map<String, Object> operation,
            final Integer sequence)
            throws Exception {
        final Map<String, Object> payload = new HashMap<>();
        payload.put("type", "DOC_OPERATION");
        payload.put("room", room);
        payload.put("clientRevision", clientRevision);
        payload.put("operation", operation);
        if (sequence != null) {
            payload.put("sequence", sequence);
        }
        return new TextMessage(objectMapper.writeValueAsString(payload));
    }

    private Map<String, Object> insertOp(final int position, final String text) {
        return Map.of("type", "INSERT", "position", position, "text", text);
    }

    private Map<String, Object> deleteOp(final int position, final int length) {
        return Map.of("type", "DELETE", "position", position, "length", length);
    }

    public record SocketMessage(
            String type,
            String room,
            ChatMessage message) {
    }
}
