package se.mistral.backend;

import jakarta.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.mistral.backend.attendance.AttendanceService;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class AttendanceTests {

    @Autowired
    private AttendanceService attendanceService;

    @Test
    void test() {
        assertThat(attendanceService).isNotNull();
    }
}
