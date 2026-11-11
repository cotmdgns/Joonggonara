package com.project.Joonggonara.model.dto;

import com.project.Joonggonara.model.vo.Criteria;
import com.project.Joonggonara.model.vo.UserDeclarationA;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DeclarationDTO {

    // 신고 접수할 때 사용
    private String type;
    private String arrText;
    private String singoText;
    private int userCode;
    private int noticeUserCode;
    private int noticeCode;
    private String noticeText;

    // 신고 검색할 때 같이간느 조건들
    private Criteria cri;          // 페이지
    private String searchUserId;        // 인풋 검색란
    private String searchOption;        // select option 값


    // 전체리스트 보낼 때 사용
    private UserDeclarationA userDeclarationA;
    private String userName;
    private String noticeUserName;

    // 신고 전체 리스트 [ 토탈 ]
    private int selectTotal;        // 전체
    private int selectStopTotal;    // 처리 대기
    private int selectSuccessTotal;        // 처리 완료
    private int selectBackTotal;            // 반려
}
