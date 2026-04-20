package se.mistral.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

import org.springframework.transaction.annotation.Transactional;
import se.mistral.backend.child.ChildService;
import se.mistral.backend.child.dto.AttendanceResponse;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;

import java.time.LocalDate;
import java.util.List;

@SpringBootTest
@Transactional
public class ChildTests {
    @Autowired
    private ChildService childService;

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
    void getAllChildrenWithAttendanceIfExistsTest() {
        CreateChildRequest request = new CreateChildRequest("test");
        childService.createChild(request);

        List<AttendanceResponse> childList = childService.getAllChildrenWithAttendanceIfExists(LocalDate.parse("2026-04-01"));
        assertThat(childList).isEqualTo(null);
        assertThat(childList.size()).isEqualTo(0);

    }
}
