package se.mistral.backend.child;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import se.mistral.backend.child.dto.AttendanceResponse;
import se.mistral.backend.child.dto.ChildResponse;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ChildRepository extends JpaRepository<Child, Long> {

    @Query("SELECT new se.mistral.backend.child.dto.AttendanceResponse(c.id, c.name, a.date, a.present) " +
           "FROM Child c LEFT JOIN Attendance a ON a.child.id = c.id AND a.date = :date")
    List<AttendanceResponse> findAllChildrenWithAttendanceIfExists(@Param("date") LocalDate date);

    @Query("SELECT new se.mistral.backend.child.dto.AttendanceResponse(c.id, c.name, a.date, a.present) " +
            "FROM Child c LEFT JOIN Attendance a ON a.child.id = c.id AND a.date = :date WHERE c.group.id = :groupId")
    List<AttendanceResponse> findAllChildrenWithAttendanceIfExistsInGroup(@Param("date") LocalDate date, @Param("groupId") Long groupId);

    @Query("SELECT new se.mistral.backend.child.dto.ChildResponse(c.id, c.name) FROM Child c")
    List<ChildResponse> findAllIdsAndNames();

    @Query("SELECT c FROM Child c LEFT JOIN FETCH c.group")
    List<Child> findAllWithGroup();

    List<ChildResponse> findAllByGroupId(Long groupId);
}

