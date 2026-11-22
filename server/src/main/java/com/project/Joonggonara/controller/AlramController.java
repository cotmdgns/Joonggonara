package com.project.Joonggonara.controller;

import com.project.Joonggonara.service.AlramService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RestController
@RequestMapping("/api/alram/*")
@CrossOrigin(origins = "*", maxAge = 6000)
@RequiredArgsConstructor
public class AlramController {

    @Autowired
    private AlramService alramService;

    // SSE 연결
    @GetMapping(
        value = "/notification/connect/{userCode}",
        produces = MediaType.TEXT_EVENT_STREAM_VALUE
    )
    public SseEmitter connect(@PathVariable Integer userCode) {

        return alramService.connect(userCode);
    }

    // 테스트 알림 전송
    @PostMapping("/notification/test/{userCode}")
    public void test(@PathVariable Integer userCode) {

        alramService.sendMessage(
                userCode,
                "새로운 댓글이 등록되었습니다!"
        );
    }

    // 전체리스트

    // 클릭 시 확인했다는거 api



}
