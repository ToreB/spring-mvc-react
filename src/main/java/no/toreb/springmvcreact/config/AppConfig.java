package no.toreb.springmvcreact.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.IdGenerator;

import java.util.UUID;
import java.util.function.Supplier;

@Configuration
public class AppConfig {

    @Bean
    Supplier<SecurityContext> securityContextSupplier() {
        return SecurityContextHolder::getContext;
    }

    @Bean
    IdGenerator idGenerator() {
        return UUID::randomUUID;
    }
}
