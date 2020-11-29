package no.toreb.springmvcreact.controller;

import org.springframework.boot.info.BuildProperties;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.function.Supplier;

@Controller
public class HomeController extends BaseController {

    public HomeController(final Supplier<SecurityContext> securityContext,
                          final BuildProperties buildProperties) {
        super(securityContext, buildProperties);
    }

    @GetMapping({"/", "/index"})
    public String index() {
        return "index";
    }
}
