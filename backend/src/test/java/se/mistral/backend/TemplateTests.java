package se.mistral.backend;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.beans.factory.annotation.Autowired;
// import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class TemplateTests {
    // if testing a service generate one using @Autowired as shown below
    // You can comment them out and replace Template with the relevant Service
    //    private final TemplateService templateService;
    //
    //    public TemplateTests(@Autowired TemplateService templateService) {
    //        this.TemplateService = TemplateService;
    //    }
    @Test
    void test() {
        //assertThat(templateService).isNotNull();
    }
}