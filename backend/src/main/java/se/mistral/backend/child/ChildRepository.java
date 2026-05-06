package se.mistral.backend.child;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import se.mistral.backend.child.dto.AttendanceResponse;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.ChildWithGroupResponse;

import java.time.LocalDate;
import java.util.List;


@Repository
public interface ChildRepository extends JpaRepository<Child, Long> {

    /**
     * Find all children registered on a given date.
     *
     * @param date the date
     * @return the list of children registered on the date.
     */
    @Query("SELECT new se.mistral.backend.child.dto.AttendanceResponse(c.id, c.name, a.date, a.status) " +
            "FROM Child c LEFT JOIN Attendance a ON a.child.id = c.id AND a.date = :date")
    List<AttendanceResponse> findAllChildrenWithAttendanceIfExists(@Param("date") LocalDate date);

    /**
     * Find all children registered on a given date given a specific group
     *
     * @param date    the date
     * @param groupId the group id
     * @return the list of children registered on the date in the group.
     */
    @Query("SELECT new se.mistral.backend.child.dto.AttendanceResponse(c.id, c.name, a.date, a.status) " +
            "FROM Child c LEFT JOIN Attendance a ON a.child.id = c.id AND a.date = :date WHERE c.group.id = :groupId")
    List<AttendanceResponse> findAllChildrenWithAttendanceIfExistsInGroup(@Param("date") LocalDate date, @Param("groupId") Long groupId);

    /**
     * Find all ids and names.
     *
     * @return the list of all child ids and names.
     */
    @Query("SELECT new se.mistral.backend.child.dto.ChildResponse(c.id, c.name) FROM Child c")
    List<ChildResponse> findAllIdsAndNames();

    /**
     * Find all ids, names and group for children.
     *
     * @return the list of all children with ids, name, and group.
     */
    @Query("SELECT new se.mistral.backend.child.dto.ChildWithGroupResponse(c.id, c.name, " +
            "new se.mistral.backend.group.dto.GroupResponse(g.id, g.name)) " +
            "FROM Child c LEFT JOIN c.group g")
    List<ChildWithGroupResponse> findAllWithGroup();

    /**
     * Find all children in group by groupId.
     *
     * @param groupId the group id
     * @return the list of all children in a group.
     */
    List<ChildResponse> findAllByGroupId(Long groupId);
}

