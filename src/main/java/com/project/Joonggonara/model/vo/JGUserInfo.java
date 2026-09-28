package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JGUserInfo {

    private int userCode; /*사용자 코드*/
    private String userId; /*사용자 아이디*/
    private String userPwd; /*사용자 비밀번호*/
    private String userImg; /*사용자 이미지*/
    private String userName; /*사용자 이름*/
    private String userCreate; /*생성 날짜*/
    private String userUpdate; /*변경 날짜*/
    private String userDelete; /*삭제 날짜*/
    private boolean userYn; /*사용유무*/
    private boolean userStopYn; /*사용자 신고 유무*/
    private String userStopDate; /*사용자 신고 누적 시 날짜 적용*/
    private int userTotalPointer; /*사용자 총 포인트*/
}
