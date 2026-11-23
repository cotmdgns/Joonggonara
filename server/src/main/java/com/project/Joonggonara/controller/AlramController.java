package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.AlramDTO;
import com.project.Joonggonara.model.dto.AlramDetailDTO;
import com.project.Joonggonara.model.dto.PageMakerDTO;
import com.project.Joonggonara.model.vo.Alram;
import com.project.Joonggonara.model.vo.Criteria;
import com.project.Joonggonara.service.AlramService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.ArrayList;
import java.util.List;
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


    public List<AlramDTO> dataCreate(List<Alram> DBData) {
        List<AlramDTO> resultData = new ArrayList<>();

        for(Alram data : DBData){
            // 게시글이면 [ 이미지 ]와 [ 제목 ]
            // 좋아요 이면 [ 게시글 제목 ]
            // 신고 하면 [ 신고 텍스트 ]
            AlramDTO dto = new AlramDTO();

            String name = alramService.selectUserName(data.getUserCode());

            if(data.getAlramTitle().equals("게시글")){
                dto = alramService.selectNoticeData(data.getAlramTitleCode());
            }else if(data.getAlramTitle().equals("신고")){
                dto.setAlramTitle("처리되었습니다.");
            }else if(data.getAlramTitle().equals("좋아요")){
                dto = alramService.selectSubNoticeData(data.getAlramTitleCode());
            }else if(data.getAlramTitle().equals("공지사항")){
                dto = alramService.selectGongGiData(data.getAlramCode());
            }
            dto.setAlramList(data);
            dto.setUserName(name);

            resultData.add(dto);
        }
      return resultData;
    };

    // 전체리스트 ( 페이징도 적용해야함 )
    @GetMapping("selectAlramModal/{code}")
    public List<AlramDTO> selectAlramModal(@PathVariable int code){
        List<Alram> DBData = alramService.selectAlramModal(code);
        // 필요한 데이터 만들어서 생성하는 메서드
        List<AlramDTO> result = dataCreate(DBData);
        return result;
    }

    // 전체리스트 ( 페이징도 적용해야함 )
    @GetMapping("selectAlram")
    public AlramDetailDTO selectAlram(
            @RequestParam int userCode,
            @RequestParam(defaultValue = "1") int pageNum,
            @RequestParam(defaultValue = "") String title,
            Criteria cri
    ){
        cri.setPageNum(pageNum);
        AlramDTO dto = AlramDTO.builder()
                .userCode(userCode)
                .title(title)
                .cri(cri)
                .build();

        log.info("마지막 데이터 확인하기 : " + dto);

        List<Alram> list = alramService.selectAlram(dto);
        int total = alramService.selectAlramTotal(dto);
        // 메서드로 데이터 만들기
        List<AlramDTO> result = dataCreate(list);

        PageMakerDTO pageMake = new PageMakerDTO(dto.getCri(), total);


        AlramDetailDTO data = AlramDetailDTO.builder()
                .alramList(result)
                .pageMakerDTO(pageMake)
                .noticeTotal(alramService.noticeTotal(userCode))
                .noticeSubTotal(alramService.noticeSubTotal(userCode))
                .singoTotal(alramService.singoTotal(userCode))
                .gonggiTotal(alramService.gonggiTotal(userCode))
                .build();

        return data;
    }

    // 클릭 시 확인했다는거 api
    @PostMapping("stateUpadate/{code}")
    public void stateUpadate(@PathVariable int code){
        alramService.stateUpadate(code);
    }

    // 얼마나 남았는지에 대한 토탈값
    @GetMapping("alramTotal/{code}")
    public int alramTotal(@PathVariable int code){
        return alramService.alramTotal(code);
    }


}
