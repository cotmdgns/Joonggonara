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

}
