package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGUserInfoBack {

    private int userCode; /*사용자 코드*/
    private String userPwd; /*사용자 비밀번호*/
    private String userImg; /*사용자 이미지*/
    private String userName; /*사용자 이름*/
    private String userUpdate; /*변경 날짜*/
    private String userAddress; // 사용자 주소
    private String userAddressDetail; // 사용자 주소 (상세)
    private String userInfo; // 사요자 자기소개

    private boolean userYn;                     /* 사용유무 : 정지나 삭제했을 떄 사용할 예정 */
    private String userStopDate;				/* 정지된 날짜 */
    private String userStopLooseDate;			/* 정지 풀린 날짜 */
    private String userDelete;					/* 삭제된 날짜 */
    private String userDeleteLoose;             /* 삭제 풀린 날짜 */
}
