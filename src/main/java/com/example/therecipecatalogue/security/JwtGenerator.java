/*package com.example.therecipecatalogue.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtGenerator {

    private static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS512);

    public String generateToken(Authentication authentication){
        String userName = authentication.getName();
        Date currentDate = new Date();
        Date expireDate = new Date(currentDate.getTime() + SecurityConstants.JWT_EXPIRATION);

        System.out.println(userName + "userNameuserNameuserNameuserName");

        String token = Jwts.builder()
            .setSubject(userName)
            .setIssuedAt(new Date())
            .setExpiration(expireDate)
            .signWith(key, SignatureAlgorithm.HS512)
            .compact();

        return token;
    }

    public String getUserNameFromJWT(String token) {
        Claims claims =  Jwts.parserBuilder()
            .setSigningKey(key)
            .build()
            .parseClaimsJws(token)
            .getBody();

        return claims.getSubject();
    }

    public boolean validateToken(String token){
        try {
            Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token);
            return true;
        } catch (Exception ex) {
            throw new AuthenticationCredentialsNotFoundException("JWT was exprired or incorrect",ex.fillInStackTrace());
        }
    }
}
*/