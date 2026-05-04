package se.mistral.backend.attendance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import se.mistral.backend.attendance.dto.AttendanceDto;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    /**
     * Find presence by child id and date.
     *
     * @param childId the child id
     * @param date    the date
     * @return the presence status of the child as an Attendance dto
     */
    Optional<AttendanceDto> findPresenceByChildIdAndDate(Long childId, LocalDate date);

    /**
     * Find by child id and date .
     *
     * @param childId the child id
     * @param date    the date
     * @return the presence status of the child an Attendance entity
     */
    Optional<Attendance> findByChildIdAndDate(Long childId, LocalDate date);
}
