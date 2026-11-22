package com.project.Joonggonara.service;

import com.project.Joonggonara.model.vo.Alram;
import mapper.AlramMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class AlramService {

    @Autowired
    private AlramMapper mapper;

    private final Map<Integer, SseEmitter> emitterMap =
            new ConcurrentHashMap<>();

    // SSE 연결 생성
    public SseEmitter connect(Integer userCode) {

        SseEmitter emitter = new SseEmitter(30 * 60 * 1000L);

        emitterMap.put(userCode, emitter);

        // 연결 종료 시 Map에서 제거
        emitter.onCompletion(() -> emitterMap.remove(userCode, emitter));

        // 연결 시간 초과 시 제거
        emitter.onTimeout(() -> emitterMap.remove(userCode, emitter));

        // 연결 성공 확인용 메시지
        try {
            emitter.send("SSE 연결 성공!");
        } catch (IOException e) {
            emitterMap.remove(userCode, emitter);
            emitter.completeWithError(e);
        }
        return emitter;
    }

    // 특정 사용자에게 테스트 알림 전송
    public void sendMessage(Integer userCode, String message) {

        SseEmitter emitter = emitterMap.get(userCode);

        if (emitter != null) {
            try {
                emitter.send(message);
            } catch (IOException e) {
                emitterMap.remove(userCode, emitter);
                emitter.completeWithError(e);
            }
        }
    }

    // 생성
    public void insertAlram(Alram alram){
        mapper.insertAlram(alram);
    };

}
