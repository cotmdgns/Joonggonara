package com.project.Joonggonara.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateDeclarationDTO {

    private int userCode;               // 사용자 코드
    private int noticeUserCode;
    private int noticeCode;
    private int declarationCode;        // 신고 PK키
    private String checkBooText;        // 체크여부 글자
    private int selectOption;           // 정지할 떄 사용할 데이터
    private String textState;           // 신고 내용
    private String userDeclarationBoo;  // 처리상태
}
