package com.project.Joonggonara.jwt;

import com.project.Joonggonara.model.vo.JGUserInfo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Map;

@Slf4j
@Service
public class JwtUtil {

    private static final String SECRET = "this-is-a-very-long-and-secure-key-which-has-more-than-64-bytes-in-length!!!!!!";
    private final SecretKey secreKey = Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));

    public String createToken (JGUserInfo userInfo) {
        return Jwts.builder()
                .signWith(secreKey)
                .setClaims(Map.of(
                        "userCode", userInfo.getUserCode(),
                        "userName", userInfo.getUserName(),
                        "userManager",userInfo.getUserManager(),
                        "userId", userInfo.getUserId()
                ))
                .setIssuedAt(new Date())
                .setExpiration(Date.from(Instant.now().plus(1, ChronoUnit.DAYS)))
                .compact();
    }

    public JGUserInfo validate(String token) {

        Claims claims = Jwts
                .parserBuilder()
                .setSigningKey(secreKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
        return JGUserInfo.builder()
                .userCode((int)claims.get("userCode"))
                .userName((String)claims.get("userName"))
                .userManager((int)claims.get("userManger"))
                .userId((String)claims.get("userId"))
                .build();
    }

}
