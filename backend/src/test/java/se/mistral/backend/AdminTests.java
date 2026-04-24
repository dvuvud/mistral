package se.mistral.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import se.mistral.backend.admin.AdminService;
import se.mistral.backend.auth.AuthService;
import se.mistral.backend.auth.dto.RegisterRequest;
import se.mistral.backend.child.ChildService;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.ChildWithGroupResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import se.mistral.backend.exception.NotFoundException;
import se.mistral.backend.group.GroupService;
import se.mistral.backend.group.dto.CreateGroupRequest;
import se.mistral.backend.group.dto.GroupResponse;
import se.mistral.backend.user.UserRepository;

import java.util.List;

@SpringBootTest
@Transactional
public class AdminTests {

    @Autowired
    private AdminService adminService;

    @Autowired
    private ChildService childService;

    @Autowired
    private GroupService groupService;

    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    @Test
    void createChildShouldReturnCorrectResponseTest() {
        ChildResponse child = adminService.createChild(new CreateChildRequest("test"));
        assertThat(child.id()).isGreaterThanOrEqualTo(1L);
        assertThat(child.name()).isEqualTo("test");
    }

    @Test
    void setUserActiveShouldActivateUserTest() {
        authService.register(new RegisterRequest("Test User", "test@test.com", "password"));
        Long userId = userRepository.findByEmail("test@test.com").orElseThrow().getId();
        var result = adminService.setUserActive(userId);
        assertThat(result.id()).isEqualTo(userId);
    }

    @Test
    void setUserActiveNotFoundShouldThrowTest() {
        assertThatThrownBy(() -> adminService.setUserActive(999L))
            .isInstanceOf(NotFoundException.class);
    }

    @Test
    void deleteChildShouldRemoveChildTest() {
        ChildResponse child = adminService.createChild(new CreateChildRequest("test"));
        adminService.deleteChild(child.id());
        assertThat(childService.getAllChildren()).isEmpty();
    }

    @Test
    void deleteChildNotFoundShouldThrowTest() {
        assertThatThrownBy(() -> adminService.deleteChild(999L))
            .isInstanceOf(NotFoundException.class);
    }

    @Test
    void getAllChildrenWithGroupEmptyTest() {
        assertThat(adminService.getAllChildrenWithGroup()).isEmpty();
    }

    @Test
    void getAllChildrenWithGroupNoGroupTest() {
        ChildResponse child = adminService.createChild(new CreateChildRequest("test"));
        List<ChildWithGroupResponse> result = adminService.getAllChildrenWithGroup();
        assertThat(result.size()).isEqualTo(1);
        assertThat(result.getFirst().id()).isEqualTo(child.id());
        assertThat(result.getFirst().name()).isEqualTo(child.name());
        assertThat(result.getFirst().group()).isNull();
    }

    @Test
    void getAllChildrenWithGroupWithGroupTest() {
        ChildResponse child = adminService.createChild(new CreateChildRequest("test"));
        GroupResponse group = groupService.createGroup(new CreateGroupRequest("Test Group"));
        groupService.assignChildToGroup(group.id(), child.id());

        List<ChildWithGroupResponse> result = adminService.getAllChildrenWithGroup();
        assertThat(result.size()).isEqualTo(1);
        assertThat(result.getFirst().name()).isEqualTo(child.name());
        assertThat(result.getFirst().group().id()).isEqualTo(group.id());
        assertThat(result.getFirst().group().name()).isEqualTo(group.name());
    }

    @Test
    void getAllGroupsEmptyTest() {
        assertThat(groupService.getAllGroups()).isEmpty();
    }

    @Test
    void getAllGroupsTest() {
        groupService.createGroup(new CreateGroupRequest("Group 1"));
        groupService.createGroup(new CreateGroupRequest("Group 2"));

        List<GroupResponse> result = groupService.getAllGroups();
        assertThat(result.size()).isEqualTo(2);
        assertThat(result.stream().map(GroupResponse::name)).contains("Group 1", "Group 2");
    }
}
