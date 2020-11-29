package no.toreb.springmvcreact;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(
        properties = {
                "spring.datasource.url=jdbc:h2:mem:testdb",
                "spring.datasource.username=sa"
        })
class ApplicationRunnerTests {

    @BeforeEach
    void setUp() {
    }

    @Test
    void contextLoads() {
    }

}
