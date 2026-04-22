package se.mistral.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

import org.springframework.transaction.annotation.Transactional;
import se.mistral.backend.attendance.AttendanceService;
import se.mistral.backend.attendance.dto.AttendanceRequest;
import se.mistral.backend.child.ChildService;
import se.mistral.backend.child.dto.AttendanceResponse;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import se.mistral.backend.group.GroupService;
import se.mistral.backend.group.dto.CreateGroupRequest;
import se.mistral.backend.group.dto.GroupResponse;

import java.time.LocalDate;
import java.util.List;

@SpringBootTest
@Transactional
public class ChildTests {

    @Autowired
    private ChildService childService;


    @Autowired
    private AttendanceService attendanceService;
    @Autowired
    private GroupService groupService;

    @Test
    void createChildShouldReturnCorrectResponseTest() {
        CreateChildRequest request = new CreateChildRequest("test");

        ChildResponse response = childService.createChild(request);

        assertThat(response.id()).isGreaterThanOrEqualTo(1L);
        assertThat(response.name()).isEqualTo("test");
    }

    @Test
    void findAllChildrenTest() {
        CreateChildRequest request1 = new CreateChildRequest("test1");
        CreateChildRequest request2 = new CreateChildRequest("test2");
        CreateChildRequest request3 = new CreateChildRequest("test3");

        childService.createChild(request1);
        childService.createChild(request2);
        childService.createChild(request3);
        List<ChildResponse> childList = childService.getAllChildren();
        assertThat(childList.size()).isEqualTo(3);
    }

    @Test
    void getAllChildrenWithAttendanceIfExistsEmptyTest() {
        List<AttendanceResponse> childList = childService.getAllChildrenWithAttendanceIfExists(LocalDate.parse("2026-04-01"));

        assertThat(childList.isEmpty());
    }

    @Test
    void getAllChildrenWithAttendanceIfExistsNullResultTest() {
        CreateChildRequest request = new CreateChildRequest("test");
        ChildResponse childResponse = childService.createChild(request);
        List<AttendanceResponse> childList = childService.getAllChildrenWithAttendanceIfExists(LocalDate.parse("2026-04-01"));

        assertThat(childList.getFirst().name()).isEqualTo(childResponse.name());
        assertThat(childList.getFirst().id()).isEqualTo(childResponse.id());
        assertThat(childList.getFirst().date()).isNull();
        assertThat(childList.getFirst().present()).isNull();

        assertThat(childList.size()).isEqualTo(1);

    }

    @Test
    void getAllChildrenWithAttendanceIfExistsMultipleChildrenTest() {
        CreateChildRequest childRequest1 = new CreateChildRequest("test one");
        CreateChildRequest childRequest2 = new CreateChildRequest("test two");
        CreateChildRequest childRequest3 = new CreateChildRequest("test three");

        ChildResponse childResponse1 = childService.createChild(childRequest1);
        ChildResponse childResponse2 = childService.createChild(childRequest2);
        ChildResponse childResponse3 = childService.createChild(childRequest3);

        LocalDate testDate = LocalDate.of(2026, 4, 1);

        AttendanceRequest request1 = new AttendanceRequest(childResponse1.id(), testDate, true);
        AttendanceRequest request2 = new AttendanceRequest(childResponse2.id(), testDate, true);
        AttendanceRequest request3 = new AttendanceRequest(childResponse3.id(), testDate, true);

        attendanceService.updateAttendance(request1);
        attendanceService.updateAttendance(request2);
        attendanceService.updateAttendance(request3);

        List<AttendanceResponse> childList = childService.getAllChildrenWithAttendanceIfExists(LocalDate.parse("2026-04-01"));
        assertThat(childList.size()).isEqualTo(3);

        AttendanceResponse attendanceResponse1 = new AttendanceResponse(childResponse1.id(), childResponse1.name(), testDate, true);
        AttendanceResponse attendanceResponse2 = new AttendanceResponse(childResponse2.id(), childResponse2.name(), testDate, true);
        AttendanceResponse attendanceResponse3 = new AttendanceResponse(childResponse3.id(), childResponse3.name(), testDate, true);

        assertThat(childList.contains(attendanceResponse1));
        assertThat(childList.contains(attendanceResponse2));
        assertThat(childList.contains(attendanceResponse3));
    }

    @Test
    void getAllChildrenWithAttendanceIfExistsInGroupEmptyTest() {
        List<AttendanceResponse> childList = childService.getAllChildrenWithAttendanceIfExistsInGroup(LocalDate.parse("2026-04-01"), 1L);
        assertThat(childList.isEmpty());
    }

    @Test
    void getAllChildrenWithAttendanceIfExistsInGroupNoChildInGroupTest() {
        CreateChildRequest childRequest1 = new CreateChildRequest("test one");
        CreateChildRequest childRequest2 = new CreateChildRequest("test two");
        CreateChildRequest childRequest3 = new CreateChildRequest("test three");

        ChildResponse childResponse1 = childService.createChild(childRequest1);
        ChildResponse childResponse2 = childService.createChild(childRequest2);
        ChildResponse childResponse3 = childService.createChild(childRequest3);
        LocalDate testDate = LocalDate.of(2026, 4, 1);

        AttendanceRequest request1 = new AttendanceRequest(childResponse1.id(), testDate, true);
        AttendanceRequest request2 = new AttendanceRequest(childResponse2.id(), testDate, true);
        AttendanceRequest request3 = new AttendanceRequest(childResponse3.id(), testDate, true);

        attendanceService.updateAttendance(request1);
        attendanceService.updateAttendance(request2);
        attendanceService.updateAttendance(request3);

        List<AttendanceResponse> childList = childService.getAllChildrenWithAttendanceIfExistsInGroup(LocalDate.parse("2026-04-01"), 1L);

        assertThat(childList.isEmpty());
    }

    @Test
    void getAllChildrenWithAttendanceIfExistsInGroupChildInGroupTest() {
        CreateChildRequest childRequest1 = new CreateChildRequest("test one");
        CreateChildRequest childRequest2 = new CreateChildRequest("test two");
        CreateChildRequest childRequest3 = new CreateChildRequest("test three");

        ChildResponse childResponse1 = childService.createChild(childRequest1);
        ChildResponse childResponse2 = childService.createChild(childRequest2);
        ChildResponse childResponse3 = childService.createChild(childRequest3);
        LocalDate testDate = LocalDate.of(2026, 4, 1);

        AttendanceRequest request1 = new AttendanceRequest(childResponse1.id(), testDate, true);
        AttendanceRequest request2 = new AttendanceRequest(childResponse2.id(), testDate, true);
        AttendanceRequest request3 = new AttendanceRequest(childResponse3.id(), testDate, true);

        attendanceService.updateAttendance(request1);
        attendanceService.updateAttendance(request2);
        attendanceService.updateAttendance(request3);
        CreateGroupRequest createGroupRequest = new CreateGroupRequest("Test Group");
        GroupResponse groupResponse = groupService.createGroup(createGroupRequest);
        groupService.assignChildToGroup(groupResponse.id(), childResponse1.id());

        List<AttendanceResponse> childList = childService.getAllChildrenWithAttendanceIfExistsInGroup(LocalDate.parse("2026-04-01"), groupResponse.id());

        assertThat(childList.size()).isEqualTo(1);
        assertThat(childList.getFirst().name()).isEqualTo(childRequest1.name());
    }

    @Test
    void getAllChildrenWithAttendanceIfExistsInGroupChildrenInGroupTest() {
        CreateChildRequest childRequest1 = new CreateChildRequest("test one");
        CreateChildRequest childRequest2 = new CreateChildRequest("test two");
        CreateChildRequest childRequest3 = new CreateChildRequest("test three");

        ChildResponse childResponse1 = childService.createChild(childRequest1);
        ChildResponse childResponse2 = childService.createChild(childRequest2);
        ChildResponse childResponse3 = childService.createChild(childRequest3);
        LocalDate testDate = LocalDate.of(2026, 4, 1);

        AttendanceRequest request1 = new AttendanceRequest(childResponse1.id(), testDate, true);
        AttendanceRequest request2 = new AttendanceRequest(childResponse2.id(), testDate, true);
        AttendanceRequest request3 = new AttendanceRequest(childResponse3.id(), testDate, true);

        attendanceService.updateAttendance(request1);
        attendanceService.updateAttendance(request2);
        attendanceService.updateAttendance(request3);
        CreateGroupRequest createGroupRequest = new CreateGroupRequest("Test Group");
        GroupResponse groupResponse = groupService.createGroup(createGroupRequest);
        groupService.assignChildToGroup(groupResponse.id(), childResponse1.id());
        groupService.assignChildToGroup(groupResponse.id(), childResponse2.id());
        groupService.assignChildToGroup(groupResponse.id(), childResponse3.id());


        List<AttendanceResponse> childList = childService.getAllChildrenWithAttendanceIfExistsInGroup(LocalDate.parse("2026-04-01"), groupResponse.id());

        assertThat(childList.size()).isEqualTo(3);
        assertThat(childList.getFirst().name()).isEqualTo(childRequest1.name());
        assertThat(childList.getLast().name()).isEqualTo(childRequest3.name());

    }

    @Test
    void getChildrenByGroupEmptyTest() {
        CreateGroupRequest createGroupRequest = new CreateGroupRequest("Test Group");
        GroupResponse groupResponse = groupService.createGroup(createGroupRequest);

        List<ChildResponse> childList = childService.getChildrenByGroup(groupResponse.id());
        assertThat(childList.isEmpty());
    }


    @Test
    void getChildrenByGroupChildInGroupTest() {
        CreateChildRequest childRequest1 = new CreateChildRequest("test one");

        ChildResponse childResponse1 = childService.createChild(childRequest1);

        CreateGroupRequest createGroupRequest = new CreateGroupRequest("Test Group");
        GroupResponse groupResponse = groupService.createGroup(createGroupRequest);
        groupService.assignChildToGroup(groupResponse.id(), childResponse1.id());

        List<ChildResponse> childList = childService.getChildrenByGroup(groupResponse.id());

        assertThat(childList.size()).isEqualTo(1);
        assertThat(childList.contains(childResponse1));
    }

    @Test
    void getChildrenByGroupChildrenInGroupTest() {
        CreateChildRequest childRequest1 = new CreateChildRequest("test one");
        CreateChildRequest childRequest2 = new CreateChildRequest("test two");
        CreateChildRequest childRequest3 = new CreateChildRequest("test three");

        ChildResponse childResponse1 = childService.createChild(childRequest1);
        ChildResponse childResponse2 = childService.createChild(childRequest2);
        ChildResponse childResponse3 = childService.createChild(childRequest3);


        CreateGroupRequest createGroupRequest = new CreateGroupRequest("Test Group");
        GroupResponse groupResponse = groupService.createGroup(createGroupRequest);
        groupService.assignChildToGroup(groupResponse.id(), childResponse1.id());
        groupService.assignChildToGroup(groupResponse.id(), childResponse2.id());
        groupService.assignChildToGroup(groupResponse.id(), childResponse3.id());


        List<ChildResponse> childList = childService.getChildrenByGroup(groupResponse.id());

        assertThat(childList.size()).isEqualTo(3);
        assertThat(childList.contains(childResponse1));
        assertThat(childList.contains(childResponse2));
        assertThat(childList.contains(childResponse3));

    }


}
