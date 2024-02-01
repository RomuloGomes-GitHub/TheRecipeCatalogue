package com.example.therecipecatalogue.demo;

//import io.swagger.v3.oas.annotations.Hidden;
import com.example.therecipecatalogue.auth.AuthenticationRequest;
import com.example.therecipecatalogue.auth.AuthenticationService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/demo-controller")
@CrossOrigin("*")
//@Hidden
public class DemoController {

    @GetMapping
    public ResponseEntity<String> sayHello(AuthenticationRequest authenticationRequest) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("authenticationauthentication " + authentication);


        //return ResponseEntity.ok("Hello [" + authentication.getName() + "] from secured endpoint " + authenticationRequest.getUserName() + "]" + authentication);
        return ResponseEntity.ok(authentication.getName()+"kk");
    }

}