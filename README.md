# spring-mvc-react
Spring Boot app with Spring MVC, with Thymeleaf engine for views.  
Integrates Spring MVC with React by using webpack to build a js-bundle and including it in Thymeleaf template.

Secured by Spring Security form login.  
Spring Data JDBC for data access.  
Flyway for db-migrations.

## Maven and npm
Integrates Maven and NPM through the exec-maven-plugin, by running NPM commands during the maven build.  
Node and NPM are not installed as part of the build, and the executables needs to be present on the path.

## Development
Have webpack watch for changes in js files during development by running `npm run watch`.  
Spring Boot Devtools are listining for changes to other resources and classes, and will restart or reload
when it detects changes.