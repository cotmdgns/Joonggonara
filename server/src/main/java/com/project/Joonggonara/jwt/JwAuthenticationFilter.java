package com.project.Joonggonara.jwt;

import com.project.Joonggonara.model.vo.JGUserInfo;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;


@Slf4j
@Component
public class JwAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil tokenProvider;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String token = parseBearerToken(request);

            if(token != null && !token.equalsIgnoreCase("null")) {
                JGUserInfo member = tokenProvider.validate(token);

                AbstractAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(member, member.getUserPwd());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
                securityContext.setAuthentication(authentication);

                SecurityContextHolder.setContext(securityContext);
            }
        } catch (Exception e) {
            // 💡 토큰에 문제가 있어도 로그만 남기고, 인증 처리를 안 한 상태로 유지합니다.
            log.warn("토큰 검증 실패 또는 유효하지 않은 토큰: {}", e.getMessage());
        }

        // 🚀 [가장 중요] try가 끝나든, catch로 빠지든 상관없이
        // 무조건 다음 필터나 컨트롤러로 요청을 전달해야 합니다! (try 밖으로 이동)
        filterChain.doFilter(request, response);
    }


    private String parseBearerToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
