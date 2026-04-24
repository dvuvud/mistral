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
        assertThat(child.id()).isNotNull();
        assertThat(child.name()).isEqualTo("test");
        assertThat(childService.getAllChildren()).hasSize(1);
    }

    @Test
    void setUserActiveShouldActivateUserTest() {
        authService.register(new RegisterRequest("Test User", "test@test.com", "password"));
        Long userId = userRepository.findByEmail("test@test.com").orElseThrow().getId();
        assertThat(userRepository.findById(userId).orElseThrow().isActive()).isFalse();
        adminService.setUserActive(userId);
        assertThat(userRepository.findById(userId).orElseThrow().isActive()).isTrue();
    }

    @Test
    void setUserActiveAlreadyActiveShouldNotThrowTest() {
        authService.register(new RegisterRequest("Test User", "test@test.com", "password"));
        Long userId = userRepository.findByEmail("test@test.com").orElseThrow().getId();
        adminService.setUserActive(userId);
        assertThat(userRepository.findById(userId).orElseThrow().isActive()).isTrue();
        adminService.setUserActive(userId);
        assertThat(userRepository.findById(userId).orElseThrow().isActive()).isTrue();
    }

    @Test
    void setUserActiveNotFoundShouldThrowTest() {
        assertThatThrownBy(() -> adminService.setUserActive(999999999999999L))
            .isInstanceOf(NotFoundException.class);
    }

    @Test
    void deleteChildShouldRemoveChildTest() {
        ChildResponse child = adminService.createChild(new CreateChildRequest("test"));
        assertThat(childService.getAllChildren()).isNotEmpty();
        adminService.deleteChild(child.id());
        assertThat(childService.getAllChildren()).isEmpty();
    }

    @Test
    void deleteChildAlreadyDeletedShouldThrowTest() {
        ChildResponse child = adminService.createChild(new CreateChildRequest("test"));
        assertThat(child.id()).isNotNull();
        assertThat(child.name()).isEqualTo("test");
        assertThat(childService.getAllChildren()).hasSize(1);
        adminService.deleteChild(child.id());
        assertThatThrownBy(() -> adminService.deleteChild(child.id()))
            .isInstanceOf(NotFoundException.class);
    }

    @Test
    void deleteChildNotFoundShouldThrowTest() {
        assertThatThrownBy(() -> adminService.deleteChild(999999999999999L))
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
        assertThat(result.getFirst().group().id()).isNull();
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
    void getAllChildrenWithGroupMultipleChildrenSameGroupTest() {
        ChildResponse child1 = adminService.createChild(new CreateChildRequest("test one"));
        ChildResponse child2 = adminService.createChild(new CreateChildRequest("test two"));
        ChildResponse child3 = adminService.createChild(new CreateChildRequest("test three"));
        GroupResponse group = groupService.createGroup(new CreateGroupRequest("Test Group"));
        groupService.assignChildToGroup(group.id(), child1.id());
        groupService.assignChildToGroup(group.id(), child2.id());
        groupService.assignChildToGroup(group.id(), child3.id());

        List<ChildWithGroupResponse> result = adminService.getAllChildrenWithGroup();
        assertThat(result.size()).isEqualTo(3);
        assertThat(result.stream().map(c -> c.group().id())).containsOnly(group.id());
    }

    @Test
    void getAllChildrenWithGroupMultipleGroupsTest() {
        ChildResponse child1 = adminService.createChild(new CreateChildRequest("test one"));
        ChildResponse child2 = adminService.createChild(new CreateChildRequest("test two"));
        GroupResponse group1 = groupService.createGroup(new CreateGroupRequest("Group 1"));
        GroupResponse group2 = groupService.createGroup(new CreateGroupRequest("Group 2"));
        groupService.assignChildToGroup(group1.id(), child1.id());
        groupService.assignChildToGroup(group2.id(), child2.id());

        List<ChildWithGroupResponse> result = adminService.getAllChildrenWithGroup();
        assertThat(result.size()).isEqualTo(2);
        assertThat(result.stream().filter(c -> c.id().equals(child1.id())).findFirst().orElseThrow().group().id()).isEqualTo(group1.id());
        assertThat(result.stream().filter(c -> c.id().equals(child2.id())).findFirst().orElseThrow().group().id()).isEqualTo(group2.id());
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
