package com.example.therecipecatalogue.signedIn;

import com.example.therecipecatalogue.auth.*;
import com.example.therecipecatalogue.user.Role;
import com.example.therecipecatalogue.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/signedIn")
@CrossOrigin("*")
public class SignedInController {

    @GetMapping
    public ResponseEntity<String[]> signedIn(AuthenticationRequest authenticationRequest) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Object userClass = authentication.getPrincipal();
        User userInfo = (User) userClass;
        String[] userDetails = new String[2];

        userDetails[0] = userInfo.getUsername();
        userDetails[1] = userInfo.getRole().toString();

        return ResponseEntity.ok(userDetails);
    }
}
