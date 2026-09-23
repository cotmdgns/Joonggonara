package com.project.Joonggonara.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGUser_info_back {

    private int user_code; /*사용자 코드*/
    private String user_pwd; /*사용자 비밀번호*/
    private String user_img; /*사용자 이미지*/
    private String user_name; /*사용자 이름*/
    private String user_update; /*변경 날짜*/

}
