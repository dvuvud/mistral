package se.mistral.backend.group;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import se.mistral.backend.group.dto.GroupResponse;

import java.util.List;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

    @Query("SELECT new se.mistral.backend.group.dto.GroupResponse(g.id, g.name) FROM Group g")
    List<GroupResponse> findAllGroups();
}
