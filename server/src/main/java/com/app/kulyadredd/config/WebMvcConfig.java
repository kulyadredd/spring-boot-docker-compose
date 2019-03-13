package com.app.kulyadredd.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;
import org.thymeleaf.templateresolver.ITemplateResolver;

import java.util.HashSet;
import java.util.Set;

@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {

    @Value("${default.charset}")
    private String defaultCharset;
    @Value("${html.mode}")

    private String htmlMode;
    private final long MAX_AGE_SECS = 3600;
    private static final String FORWARD_TO_HOME = "forward:/";

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("HEAD", "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE")
                .maxAge(MAX_AGE_SECS);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName(FORWARD_TO_HOME);
        registry.addViewController("/{x:[\\w\\-]+}").setViewName(FORWARD_TO_HOME);
        registry.addViewController("/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}").setViewName(FORWARD_TO_HOME);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/*.css", "/*.js", "/*.png", "*.ico", "/*.ttf")
                .setCachePeriod(0)
                .addResourceLocations("classpath:/");
    }

    @Bean
    public SpringTemplateEngine templateEngine() {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        Set<ITemplateResolver> resolvers = new HashSet();
        resolvers.add(generateClassLoaderTemplateResolver());
        templateEngine.setTemplateResolvers(resolvers);
        return templateEngine;
    }

    private ClassLoaderTemplateResolver generateClassLoaderTemplateResolver() {
        ClassLoaderTemplateResolver templateResolver = new ClassLoaderTemplateResolver();
        templateResolver.setPrefix("/");
        templateResolver.setCacheable(false);
        templateResolver.setSuffix(".html");
        templateResolver.setTemplateMode(htmlMode);
        templateResolver.setCharacterEncoding(defaultCharset);
        templateResolver.setOrder(0);
        templateResolver.setCheckExistence(true);
        return templateResolver;
    }
}
