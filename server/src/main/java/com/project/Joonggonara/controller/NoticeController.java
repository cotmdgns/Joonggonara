package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGNoticeComment;
import com.project.Joonggonara.model.vo.JGNoticeSubcribe;
import com.project.Joonggonara.service.NoticeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/notice/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    // 구독 생성
    @PostMapping("subscribeNoticeCreate")
    public void subscribeNoticeCreate(JGNoticeSubcribe jgNoticeSubcribe){
        noticeService.subscribeNoticeCreate(jgNoticeSubcribe);
    };
    // 구독 취소
    @PostMapping("subscribeNoticeUpdate")
    public void subscribeNoticeUpdate(JGNoticeSubcribe jgNoticeSubcribe){
        noticeService.subscribeNoticeUpdate(jgNoticeSubcribe);
    };

    // 신고 하기


    // 구매하기 [ 딱히 대단한 작업은 없음, 게시글에 있는거 조건만 변경하기 ]
    @PostMapping("saleJGNotice")
    public void saleJGNotice(@RequestBody JGNotice jgNotice){
        noticeService.saleJGNotice(jgNotice);
    };


    //<!--    댓글 조회 , 게시글 코드 받고 -->
    @GetMapping("selectComment/{code}")
    public JGNoticeComment selectComment(@PathVariable("code") int code){
        return noticeService.selectComment(code);
    };
    //<!--  댓글 생성  -->
    @PostMapping("createComment")
    public void createComment(@RequestBody JGNoticeComment jgNoticeComment){
        noticeService.createComment(jgNoticeComment);
    };
    //<!--  댓글 수정  -->
    @PostMapping("updateComment")
    public void updateComment(@RequestBody JGNoticeComment jgNoticeComment){
        noticeService.updateComment(jgNoticeComment);
    };
    //<!--  댓글 삭제  -->
    @PostMapping("deleteComment/{code}")
    public void deleteComment(@PathVariable("code") int code){
        noticeService.deleteComment(code);
    };

}
