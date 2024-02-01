package com.example.therecipecatalogue.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(false);

        config.addAllowedOrigin("*");  // Allow all origins, you might want to restrict this in production
        config.addAllowedHeader("*");
        //config.addAllowedOrigin("http://localhost:3000");
        //config.addAllowedOrigin("http://localhost:8080");

        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");

        source.registerCorsConfiguration("/**", config);
        //source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}
