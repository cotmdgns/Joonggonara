package com.project.Joonggonara.controller;

import com.project.Joonggonara.jwt.JwtUtil;
import com.project.Joonggonara.model.dto.NaverProfileDTO;
import com.project.Joonggonara.model.dto.NaverTokenDTO;
import com.project.Joonggonara.model.vo.JGUserInfo;
import com.project.Joonggonara.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class LoginAPIController {

    // @@@@@@@@@@@@@@@@@ 네이버 로그인 api 용도
    @Value("${naver.client-id}")
    private String clientId;
    @Value("${naver.client-secret}")
    private String clientSecret;
    @Value("${naver.callback-url}")
    private String callbackUrl;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;


    // 호출용
    @GetMapping("/naver/login")
    public void naverLoginAPI(HttpSession session, HttpServletResponse response) throws IOException {
        // state 값은 인증을 위한? 검증을 위한? 중간에 키가 변경됬을 떄 막아주는?
        String state = UUID.randomUUID().toString();
        session.setAttribute("naverState", state);

        String url = "https://nid.naver.com/oauth2.0/authorize"
                + "?response_type=code"
                + "&client_id=" + clientId
                + "&redirect_uri=" + URLEncoder.encode(callbackUrl, StandardCharsets.UTF_8)
                + "&state=" + URLEncoder.encode(state, StandardCharsets.UTF_8);

        response.sendRedirect(url);
    }

    // 콜백용
    @GetMapping("/naver/code")
    public void naverCallbackAPI(
            @RequestParam String code,
            @RequestParam String state,
            HttpSession session,
            HttpServletResponse response
    ) throws IOException {
        System.out.println("인증 코드 : " + code);
        System.out.println("상태값 : " + state);

        String savedState = (String) session.getAttribute("naverState");

        if (savedState == null || !savedState.equals(state)) {
            response.sendRedirect("http://localhost:5173/login/naver?code=" + code);
        }
        session.removeAttribute("naverState");

        NaverTokenDTO token = RestClient.create()
                .get()
                .uri(uriBuilder -> uriBuilder
                        .scheme("https")
                        .host("nid.naver.com")
                        .path("/oauth2.0/token")
                        .queryParam("grant_type", "authorization_code")
                        .queryParam("client_id", clientId)
                        .queryParam("client_secret",clientSecret)
                        .queryParam("code", code)
                        .queryParam("state", state)
                        .build()
                )
                .retrieve()
                .body(NaverTokenDTO.class);

        System.out.println("Access Token 발급 완료");
        System.out.println(token);


        NaverProfileDTO profile = RestClient.create()
                .get()
                .uri("https://openapi.naver.com/v1/nid/me")
                .header(
                        "Authorization",
                        "Bearer " + token.getAccess_token()
                )
                .retrieve()
                .body(NaverProfileDTO.class);

        System.out.println("profile 발급 완료");
        System.out.println(profile);


        JGUserInfo info =  userService.selectNaverId(profile.getResponse().getId());
        // 1. 로그인 성공하면 profile ID로 DB에 들어가서 고유값 있는지 확인하기,
        if(info != null){
            //      ㄴ 있다면 데이터 토큰으로 만들어서 메인페이지로 넘어가기
            String loginState = UUID.randomUUID().toString();
            String jwt = jwtUtil.createToken(info);
            session.setAttribute("loginState", loginState);
            session.setAttribute("jwt", jwt);
            response.sendRedirect("http://localhost:5173/login/naver?code=" + loginState);
        }else{
            //      ㄴ 없다면 세션으로 ID랑 이름을 저장하고 로그인 페이지로 넘어가기
            String signUpState = UUID.randomUUID().toString();
            session.setAttribute("signUpState", signUpState);
            session.setAttribute("profile", profile);
            response.sendRedirect("http://localhost:5173/signUp?token=" + signUpState);
        }

    }

    // 네이버 로그인용도
    @PostMapping("/naverLogin/{code}")
    public String naverLogin(
            HttpSession session,
            @PathVariable String code) {

        String serverCode = (String) session.getAttribute("loginState");
        log.info("데이터 왔냐고 : " + serverCode);

        if (serverCode == null || !serverCode.equals(code)) {
            return "loginFalse";
        }

        String token = (String) session.getAttribute("jwt");

        session.removeAttribute("loginState");
        session.removeAttribute("jwt");

        log.info("데이터 왔냐고");
        return token;
    }
}
