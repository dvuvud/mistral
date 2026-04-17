package se.mistral.backend.attendance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import se.mistral.backend.attendance.dto.AttendanceDto;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    Optional<AttendanceDto> findPresenceByChildIdAndDate(Long childId, LocalDate date);
    Optional<Attendance> findByChildIdAndDate(Long childId, LocalDate date);
}
