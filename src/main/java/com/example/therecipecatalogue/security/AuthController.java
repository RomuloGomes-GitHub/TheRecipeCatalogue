/*package com.example.therecipecatalogue.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Collections;

@RestController
@RequestMapping(path = "api/v1/auth")
@CrossOrigin("*") // Just use it in QA so the CORS issue goes away - Otherwise you have risk to have different hosts accessing the backend
public class AuthController {

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JwtGenerator jwtGenerator;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder, JwtGenerator jwtGenerator) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
    }

    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto){

        UserEntity user = new UserEntity();
        user.setUserName(registerDto.getUserName());
        user.setPassword(passwordEncoder.encode((registerDto.getPassword())));

        Role roles = roleRepository.findByName("USER").get();
        user.setRoles(Collections.singletonList(roles));

        userRepository.save(user);

        return new ResponseEntity<>("User registered success", HttpStatus.OK);
    }

    @PostMapping("login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getUserName(), loginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);
        return new ResponseEntity<>(new AuthResponseDto(token), HttpStatus.OK);
    }


    @GetMapping("check")
    public ResponseEntity<?> checkAuth() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Authentication authentication2 = authentication;
        //Authentication authentication2 = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getUserName(), loginDto.getPassword()));

        System.out.println("authentication" + authentication + " tttt ");
        System.out.println("authentication2" + authentication2.getDetails() + " eeee ");
        //ttpServletRequest request = HttpServletRequest;

        if (authentication != null && authentication.isAuthenticated()) {
            // User is authenticated
            System.out.println("it's loooooooooooooooged" + authentication.getName() + " yyy ");
            return ResponseEntity.ok("User is logged in " + authentication.getPrincipal());
            //return ResponseEntity.ok("User is logged in " + authentication.getPrincipal());
        } /*else {
            // User is not authenticated
            System.out.println("it's not loooooooooooooooged");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User is not logged in");
        }*/
        /*return null;
    }
}
*/