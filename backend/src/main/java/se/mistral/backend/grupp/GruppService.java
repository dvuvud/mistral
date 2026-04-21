package se.mistral.backend.grupp;

import org.springframework.stereotype.Service;
import se.mistral.backend.child.ChildRepository;
import se.mistral.backend.child.Child;
import se.mistral.backend.grupp.dto.CreateGruppRequest;
import se.mistral.backend.grupp.dto.GruppResponse;
import lombok.RequiredArgsConstructor;
import se.mistral.backend.exception.NotFoundException;

@Service
@RequiredArgsConstructor
public class GruppService {

    private final GruppRepository gruppRepository;
    private final ChildRepository childRepository;

    public GruppResponse createGrupp(CreateGruppRequest request) {
        Grupp grupp = new Grupp();
        grupp.setName(request.name());
        grupp = gruppRepository.save(grupp);
        return new GruppResponse(grupp.getId(), grupp.getName());
    }

    public GruppResponse assignChildToGrupp(Long gruppId, Long childId) {
        Child child = childRepository.findById(childId).orElseThrow(() -> new NotFoundException("Child not found"));
        Grupp grupp = gruppRepository.findById(gruppId).orElseThrow(() -> new NotFoundException("Grupp not found"));
        child.setGrupp(grupp);
        childRepository.save(child);
        return new GruppResponse(grupp.getId(), grupp.getName());
    }

}