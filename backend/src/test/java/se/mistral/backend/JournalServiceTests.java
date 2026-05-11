package se.mistral.backend;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import se.mistral.backend.child.ChildService;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import se.mistral.backend.group.GroupService;
import se.mistral.backend.group.dto.CreateGroupRequest;
import se.mistral.backend.group.dto.GroupResponse;
import se.mistral.backend.journal.JournalService;
import se.mistral.backend.journal.JournalTarget;
import se.mistral.backend.journal.dto.BroadcastMessage;
import se.mistral.backend.journal.dto.JournalDto;
import se.mistral.backend.journal.ot.Operation;
import se.mistral.backend.user.Role;
import se.mistral.backend.user.User;
import se.mistral.backend.user.UserRepository;

@SpringBootTest
@Transactional
public class JournalServiceTests {

    @Autowired
    private JournalService journalService;
    @Autowired
    private ChildService childService;
    @Autowired
    private GroupService groupService;
    @Autowired
    private UserRepository userRepository;

    private static final LocalDate DATE = LocalDate.now();

    private JournalTarget.Child CHILD;
    private JournalTarget.Group GROUP;

    private Long USER_A;
    private Long USER_B;

    @BeforeEach
    void setUp() {
        final ChildResponse child = childService.createChild(new CreateChildRequest("journal-test-child"));
        final GroupResponse group = groupService.createGroup(new CreateGroupRequest("journal-test-group"));
        CHILD = new JournalTarget.Child(child.id());
        GROUP = new JournalTarget.Group(group.id());
        User userA = userRepository.save(User.builder()
                .name("Test User A")
                .email("test-a@test.com")
                .password("ignored")
                .role(Role.TEACHER)
                .build());
        User userB = userRepository.save(User.builder()
                .name("Test User B")
                .email("test-b@test.com")
                .password("ignored")
                .role(Role.TEACHER)
                .build());

        USER_A = userA.getId();
        USER_B = userB.getId();
    }

    @Test
    void getOrCreateChildJournalShouldReturnEmptyContent() {
        final JournalDto dto = journalService.getOrCreate(CHILD, DATE);

        assertThat(dto.content()).isEqualTo("");
        assertThat(dto.serverRevision()).isGreaterThanOrEqualTo(0);
    }

    @Test
    void getOrCreateGroupJournalShouldReturnEmptyContent() {
        final JournalDto dto = journalService.getOrCreate(GROUP, DATE);

        assertThat(dto.content()).isEqualTo("");
    }

    @Test
    void getOrCreateIsIdempotent() {
        final JournalDto first = journalService.getOrCreate(CHILD, DATE);
        final JournalDto second = journalService.getOrCreate(CHILD, DATE);

        assertThat(first.content()).isEqualTo(second.content());
        assertThat(first.serverRevision()).isEqualTo(second.serverRevision());
    }

    @Test
    void getOrCreateIsSeparatePerDate() {
        journalService.applyOperation(CHILD, DATE, 0, insert(0, "hello"), USER_A, null);
        final JournalDto other = journalService.getOrCreate(CHILD, DATE.plusDays(1));

        assertThat(other.content()).isEqualTo("");
    }

    @Test
    void getOrCreateIsSeparatePerTarget() {
        journalService.applyOperation(CHILD, DATE, 0, insert(0, "child content"), USER_A, null);
        final JournalDto groupJournal = journalService.getOrCreate(GROUP, DATE);

        assertThat(groupJournal.content()).isEqualTo("");
    }

    @Test
    void singleInsertShouldUpdateContent() {
        final BroadcastMessage result = journalService.applyOperation(CHILD, DATE, 0, insert(0, "hello"), USER_A, null);

        assertThat(result.operation().getText()).isEqualTo("hello");
        assertThat(journalService.getOrCreate(CHILD, DATE).content()).isEqualTo("hello");
    }

    @Test
    void sequentialInsertsShouldAccumulateContent() {
        journalService.applyOperation(CHILD, DATE, 0, insert(0, "hello"), USER_A, 1);
        journalService.applyOperation(CHILD, DATE, 1, insert(5, " world"), USER_A, 2);

        assertThat(journalService.getOrCreate(CHILD, DATE).content()).isEqualTo("hello world");
    }

    @Test
    void singleDeleteShouldUpdateContent() {
        journalService.applyOperation(CHILD, DATE, 0, insert(0, "hello world"), USER_A, 1);
        journalService.applyOperation(CHILD, DATE, 1, delete(5, 6), USER_A, 2);

        assertThat(journalService.getOrCreate(CHILD, DATE).content()).isEqualTo("hello");
    }

    @Test
    void deleteAtEndOfContentShouldClampGracefully() {
        journalService.applyOperation(CHILD, DATE, 0, insert(0, "hi"), USER_A, 1);
        journalService.applyOperation(CHILD, DATE, 1, delete(1, 999), USER_A, 2);

        assertThat(journalService.getOrCreate(CHILD, DATE).content()).isEqualTo("h");
    }

    @Test
    void broadcastMessageShouldCarryCorrectMetadata() {
        final BroadcastMessage result = journalService.applyOperation(CHILD, DATE, 0, insert(0, "hello"), USER_A, 7);

        assertThat(result.type()).isEqualTo("DOC_OPERATION");
        assertThat(result.userId()).isEqualTo(USER_A);
        assertThat(result.sequence()).isEqualTo(7);
    }

    @Test
    void broadcastMessageWithNullSequenceShouldBeAllowed() {
        final BroadcastMessage result = journalService.applyOperation(CHILD, DATE, 0, insert(0, "hello"), USER_A, null);

        assertThat(result.sequence()).isNull();
    }

    @Test
    void serverRevisionShouldIncrementWithEachOperation() {
        final BroadcastMessage first = journalService.applyOperation(CHILD, DATE, 0, insert(0, "a"), USER_A, 1);
        final BroadcastMessage second = journalService.applyOperation(CHILD, DATE, first.serverRevision(),
                insert(1, "b"), USER_A,
                2);

        assertThat(second.serverRevision()).isGreaterThan(first.serverRevision());
    }

    @Test
    void concurrentInsertsFromDifferentUsersShouldBeTransformed() {
        journalService.applyOperation(CHILD, DATE, 0, insert(0, "hello"), USER_A, null);
        journalService.applyOperation(CHILD, DATE, 1, insert(2, "X"), USER_A, null);
        journalService.applyOperation(CHILD, DATE, 1, insert(4, "Y"), USER_B, null);

        final JournalDto dto = journalService.getOrCreate(CHILD, DATE);
        assertThat(dto.content()).contains("X");
        assertThat(dto.content()).contains("Y");
        assertThat(dto.content()).hasSize(7);
    }

    @Test
    void operationFromSameUserIsNotTransformed() {
        journalService.applyOperation(CHILD, DATE, 0, insert(0, "abc"), USER_A, 1);
        journalService.applyOperation(CHILD, DATE, 0, insert(3, "d"), USER_A, 2);

        assertThat(journalService.getOrCreate(CHILD, DATE).content()).isEqualTo("abcd");
    }

    private Operation insert(final int pos, final String text) {
        return Operation.builder().type(Operation.Type.INSERT).position(pos).text(text).build();
    }

    private Operation delete(final int pos, final int length) {
        return Operation.builder().type(Operation.Type.DELETE).position(pos).length(length).build();
    }
}
