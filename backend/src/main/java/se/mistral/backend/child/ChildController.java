package se.mistral.backend.child;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import se.mistral.backend.child.dto.ChildResponse;
import se.mistral.backend.child.dto.CreateChildRequest;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;


@RequiredArgsConstructor
@RequestMapping("/api/children")
@RestController
public class ChildController {
    
    private final ChildService childService;

    @PostMapping("/")
    public ResponseEntity<ChildResponse> createChild(@RequestBody CreateChildRequest request) {
        return ResponseEntity.ok(childService.createChild(request));
    }

    @GetMapping("/")
    public ResponseEntity<List<ChildResponse>> getAllChildren() {
        return ResponseEntity.ok(childService.getAllChildren());
    }
}
