package se.mistral.backend.attendance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    Optional<Attendance> findByChildId(Long childId);
    Optional<Attendance> findByChildIdAndDate(Long childId, LocalDate date);
}
