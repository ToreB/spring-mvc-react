package no.toreb.springmvcreact.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.info.BuildProperties;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.function.Supplier;

@RequiredArgsConstructor
public class BaseController {

    protected final Supplier<SecurityContext> securityContextSupplier;

    protected final BuildProperties buildProperties;

    @ModelAttribute("username")
    protected String username() {
        final var authentication = securityContextSupplier.get().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return "Anonymous";
        }

        return ((UserDetails) authentication.getPrincipal()).getUsername();
    }

    @ModelAttribute("buildProperties")
    protected BuildProperties buildProperties() {
        return buildProperties;
    }

}
