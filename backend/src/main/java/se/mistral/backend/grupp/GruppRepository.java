package se.mistral.backend.grupp;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GruppRepository extends JpaRepository<Grupp, Long> {

}
