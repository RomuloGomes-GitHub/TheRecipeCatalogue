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

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests()
                //.antMatchers("/public/**").permitAll()
                //.antMatchers("/**").authenticated()
                .antMatchers("/api/v1/auth/authenticate").permitAll()
                .antMatchers("/api/v1/demo-controller").permitAll()
                .antMatchers("/api/v1/recipes").permitAll()
                .antMatchers("/recipes").permitAll()
                .antMatchers("/login").permitAll()
                //.antMatchers("/api/v1/demo/**").permitAll()
                .anyRequest().authenticated()
                .and()
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .formLogin()
                //.loginPage("/login") // Specify the custom login page URL

                .permitAll()
                .and()
            .logout()
                //.logoutUrl("/logout") // Specify the custom logout URL
                .permitAll(); // Allow anyone to access the logout URL;*/
                //.antMatchers("/api/v1/recipes").permitAll()
                //.anyRequest().authenticated();
                /*.and()
            .formLogin()
                .loginPage("/login") // Specify the custom login page URL
                .permitAll() // Allow anyone to access the login page
                .and()
            .logout()
                .logoutUrl("/logout") // Specify the custom logout URL
                .permitAll(); // Allow anyone to access the logout URL
*/
        return http.build();
    }
}

/*
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/v1/auth/**").permitAll()
                .antMatchers("/api/v1/demo-controller").permitAll()
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
        .formLogin()
        .loginPage("/login") // Specify the custom login page URL
        .permitAll()
        .and()
        .logout()
        .logoutUrl("/logout") // Specify the custom logout URL
        .permitAll();
*/






   /*
        http
                //.csrf(AbstractHttpConfigurer::disable)
            .csrf().disable()
            //.authorizeHttpRequests(req ->
            .authorizeHttpRequests()
            .requestMatchers(new AntPathRequestMatcher("/api/**"))
            .permitAll()
            /*.requestMatchers("/api/v1/management/**").hasAnyRole(ADMIN.name(), MANAGER.name())
            .requestMatchers(GET, "/api/v1/management/**").hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
            .requestMatchers(POST, "/api/v1/management/**").hasAnyAuthority(ADMIN_CREATE.name(), MANAGER_CREATE.name())
            .requestMatchers(PUT, "/api/v1/management/**").hasAnyAuthority(ADMIN_UPDATE.name(), MANAGER_UPDATE.name())
            .requestMatchers(DELETE, "/api/v1/management/**").hasAnyAuthority(ADMIN_DELETE.name(), MANAGER_DELETE.name())
            */
            /*.anyRequest()
                    .authenticated()
                    .and()

                    .formLogin()
                    .loginPage("/loginPage")
                    .loginProcessingUrl("/authenticateTheUser")
                    .defaultSuccessUrl("/", true)
                    .permitAll()
                    .and()
                    //)
                    //.sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                    .authenticationProvider(authenticationProvider)
                    .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
        .logout(logout ->
        logout.logoutUrl("/api/v1/auth/logout")
        .addLogoutHandler(logoutHandler)
        .logoutSuccessHandler((request, response, authentication) -> System.out.println("ppp "+SecurityContextHolder.getContext())));
        */
            //.logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext()));
        //.logout()
        //.permitAll();
            /*.logout(logout ->
                logout.logoutUrl("/api/v1/auth/logout")
                    .addLogoutHandler(logoutHandler)
                    .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext()));*/
            /*.logout(logout ->
                logout.logoutUrl("/api/v1/auth/logout")
                    .addLogoutHandler(logoutHandler)
                    .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
            );*/
