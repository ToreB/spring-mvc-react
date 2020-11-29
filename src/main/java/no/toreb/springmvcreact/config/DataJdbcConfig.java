package no.toreb.springmvcreact.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jdbc.repository.config.EnableJdbcAuditing;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;
import java.util.function.Supplier;

@Configuration
@EnableJdbcAuditing
@RequiredArgsConstructor
class DataJdbcConfig {

    private final Supplier<SecurityContext> securityContextSupplier;

    @Bean
    AuditorAware<String> springSecurityAuditorAware() {
        return () -> Optional.ofNullable(securityContextSupplier.get().getAuthentication())
                             .filter(Authentication::isAuthenticated)
                             .map(authentication -> (UserDetails) authentication.getPrincipal())
                             .map(UserDetails::getUsername);
    }
}
