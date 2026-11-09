package com.project.Joonggonara.service;

import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGNoticeComment;
import com.project.Joonggonara.model.vo.JGNoticeSubcribe;
import mapper.NoticeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticeService {

    @Autowired
    private NoticeMapper mapper;

    // 구독 생성
    public void subscribeNoticeCreate(JGNoticeSubcribe jgNoticeSubcribe){
        mapper.subscribeNoticeCreate(jgNoticeSubcribe);
    };
    // 구독 취소
    public void subscribeNoticeUpdate(JGNoticeSubcribe jgNoticeSubcribe){
        mapper.subscribeNoticeUpdate(jgNoticeSubcribe);
    };

    // 상품 구매하기
    public void saleJGNotice(JGNotice jgNotice){
        mapper.saleJGNotice(jgNotice);
    };



    //<!--    댓글 조회 , 게시글 코드 받고 -->
    public JGNoticeComment selectComment(int code){
        return mapper.selectComment(code);
    };
    //<!--  댓글 생성  -->
    public void createComment(JGNoticeComment jgNoticeComment){
        mapper.createComment(jgNoticeComment);
    };
    //<!--  댓글 수정  -->
    public void updateComment(JGNoticeComment jgNoticeComment){
        mapper.updateComment(jgNoticeComment);
    };
    //<!--  댓글 삭제  -->
    public void deleteComment(int code){
        mapper.deleteComment(code);
    };

}
