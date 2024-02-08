package com.example.therecipecatalogue.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.security.web.util.matcher.AndRequestMatcher;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/*import static com.example.therecipecatalogue.user.Permission.ADMIN_CREATE;
import static com.example.therecipecatalogue.user.Permission.ADMIN_DELETE;
import static com.example.therecipecatalogue.user.Permission.ADMIN_READ;
import static com.example.therecipecatalogue.user.Permission.ADMIN_UPDATE;
import static com.example.therecipecatalogue.user.Permission.MANAGER_CREATE;
import static com.example.therecipecatalogue.user.Permission.MANAGER_DELETE;
import static com.example.therecipecatalogue.user.Permission.MANAGER_READ;
import static com.example.therecipecatalogue.user.Permission.MANAGER_UPDATE;*/
import static com.example.therecipecatalogue.user.Role.ADMIN;
//import static com.example.therecipecatalogue.user.Role.MANAGER;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;
    private final AccessDeniedService accessDeniedService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors() // enable CORS support
                .and()
            .csrf().disable()
            //.cors().and()
            .authorizeRequests()
                //.antMatchers("*").permitAll()
                .antMatchers("/").permitAll()
                //.antMatchers("/public/**").permitAll()
                .antMatchers("/**").permitAll()
                .antMatchers("/about").permitAll()
                .antMatchers("/recipes").permitAll()
                .antMatchers("/contact").permitAll()
                .antMatchers("/api/v1/auth/register").permitAll()
                .antMatchers("/api/v1/auth/authenticate").permitAll()
                .antMatchers("/api/v1/signedIn").permitAll()
                .antMatchers("/api/v1/recipes").permitAll()
                .antMatchers("/api/v1/recipes/recipe/*").permitAll()
                .antMatchers("/api/v1/recipes/recipes_top_3_rating").permitAll()
                .antMatchers("/api/v1/recipes/recipes_latest_3").permitAll()
                //.antMatchers("/api/v1/recipes").hasAuthority("ADMIN")
                //.anyRequest().permitAll()
                .anyRequest().authenticated()
                .and()
            .exceptionHandling()
                //.accessDeniedPage("/access-denied")
                .accessDeniedHandler(accessDeniedService)
                .and()
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .formLogin()
                //.loginPage("/logina") // Specify the custom login page URL
                .permitAll()
                .and()
            .logout()
                .addLogoutHandler(logoutHandler)
                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
                .permitAll();
            /*.logout()
                //.logoutUrl("/logout") // Specify the custom logout URL
                .addLogoutHandler(logoutHandler)
                .permitAll(); // Allow anyone to access the logout URL;*/

        return http.build();
    }
}
