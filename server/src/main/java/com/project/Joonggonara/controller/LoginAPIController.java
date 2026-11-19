package com.project.Joonggonara.controller;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class LoginAPIController {

//    // @@@@@@@@@@@@@@@@@ 네이버 로그인 api 용도
//    @Value("${naver.client-id}")
//    private String clientId;
//    @Value("${naver.client-secret}")
//    private String clientSecret;
//    @Value("${naver.callback-url}")
//    private String callbackUrl;
//
//
//    // 호출용
//    @GetMapping("/naver/login")
//    public void naverLoginAPI(HttpSession session, HttpServletResponse response) throws IOException {
//        // state 값은 인증을 위한? 검증을 위한? 중간에 키가 변경됬을 떄 막아주는?
//        String state = UUID.randomUUID().toString();
//        session.setAttribute("naverState", state);
//
//        String url = "https://nid.naver.com/oauth2.0/authorize"
//                + "?response_type=code"
//                + "&client_id=" + clientId
//                + "&redirect_uri=" + URLEncoder.encode(callbackUrl, StandardCharsets.UTF_8)
//                + "&state=" + URLEncoder.encode(state, StandardCharsets.UTF_8);
//
//        response.sendRedirect(url);
//    }
//
//    // 콜백용
//    @GetMapping("/naver/code")
//    public String naverCallbackAPI(@RequestParam String code, @RequestParam String state,HttpSession session) {
//        System.out.println("인증 코드 : " + code);
//        System.out.println("상태값 : " + state);
//
//        String savedState = (String) session.getAttribute("naverState");
//
//        if (savedState == null || !savedState.equals(state)) {
//            return "잘못된 인증 요청입니다.";
//        }
//        session.removeAttribute("naverState");
//
//        // 1. 네이버 인증하기전에 서버에서 랜덤값 state를 보냄
//
//        // 2. 인증 성공하면 code값과 state를 될려줌 ( 콜백 url 위치로 )
//
//        // 3. 내가 만든 랜덤 state값으로 확인하고, 받은 code값으로 엑세스 코드??
//        //      프로필 조회할 수 있는 api 코드를 또 받아야 함
//
//        // 4. 마지막으로 그 토큰값으로 사용자 정보 가져올 수 있음
//
//        return "네이버 로그인 인증 완료";
//    }

}
