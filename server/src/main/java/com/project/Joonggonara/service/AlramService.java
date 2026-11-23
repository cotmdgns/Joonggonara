package com.project.Joonggonara.service;

import com.project.Joonggonara.model.dto.AlramDTO;
import com.project.Joonggonara.model.vo.Alram;
import mapper.AlramMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;
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


    // 전체리스트
    public List<Alram> selectAlram(AlramDTO alram){
        return mapper.selectAlram(alram);
    };

    // 전체리스트(모달)
    public List<Alram> selectAlramModal(int code){
        return mapper.selectAlramModal(code);
    };

    // 전체리스트(토탈)
    public int selectAlramTotal(AlramDTO alram){
        return mapper.selectAlramTotal(alram);
    };

    // 따로 공지사항에서 사용할 생성페이지
    public void insertAlramList(AlramDTO alram){
        mapper.insertAlramList(alram);
    };
    public List<Integer> selectUserCode(){
        return mapper.selectUserCode();
    };


    public int alramTotal(int code){
        return mapper.alramTotal(code);
    };


    // 생성
    public void insertAlram(Alram alram){
        mapper.insertAlram(alram);
    };

    // 수정(확인용)
    public void stateUpadate(int code){
        mapper.stateUpadate(code);
    };


    // 토탈 데이터 종합
    public int noticeTotal(int code){
        return mapper.noticeTotal(code);
    };
    public int noticeSubTotal(int code){
        return mapper.noticeSubTotal(code);
    };
    public int singoTotal(int code){
        return mapper.singoTotal(code);
    };
    public int gonggiTotal(int code){
        return mapper.gonggiTotal(code);
    };

    // 전체 데이터 보내기전에 필요한 데이터
    public AlramDTO selectNoticeData(int code){
        return mapper.selectNoticeData(code);
    };
    public AlramDTO selectSubNoticeData(int code){
        return mapper.selectSubNoticeData(code);
    };
    public AlramDTO selectGongGiData(int code){
        return mapper.selectGongGiData(code);
    };
    public String selectUserName(int code){
        return  mapper.selectUserName(code);
    };


}
