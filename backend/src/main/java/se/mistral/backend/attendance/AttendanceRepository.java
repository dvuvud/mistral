package se.mistral.backend.attendance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import se.mistral.backend.attendance.dto.AttendanceDto;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    /**
     * Find attendance by child id and date.
     *
     * @param childId the child id
     * @param date    the date
     * @return the attendance dto of the child on the given date
     */
    @Query("SELECT new se.mistral.backend.attendance.dto.AttendanceDto(a.status, a.checkInTime, a.checkOutTime) " +
            "FROM Attendance a WHERE a.child.id = :childId AND a.date = :date")
    Optional<AttendanceDto> findAttendanceByChildIdAndDate(@Param("childId") Long childId, @Param("date") LocalDate date);

    /**
     * Find by child id and date .
     *
     * @param childId the child id
     * @param date    the date
     * @return the presence status of the child an Attendance entity
     */
    Optional<Attendance> findByChildIdAndDate(Long childId, LocalDate date);

    /**
     * Find all attendance records for a child, ordered by date descending.
     *
     * @param childId the child id
     * @return the attendance history of the child
     */
    @Query("SELECT new se.mistral.backend.attendance.dto.AttendanceDto(a.status, a.checkInTime, a.checkOutTime) " +
            "FROM Attendance a WHERE a.child.id = :childId ORDER BY a.date DESC")
    List<AttendanceDto> findAttendanceHistoryByChildId(@Param("childId") Long childId);
}
