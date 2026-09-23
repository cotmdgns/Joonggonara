package com.project.Joonggonara.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGUser_info {

    private int user_code; /*사용자 코드*/
    private String user_id; /*사용자 아이디*/
    private String user_pwd; /*사용자 비밀번호*/
    private String user_img; /*사용자 이미지*/
    private String user_name; /*사용자 이름*/
    private String user_create; /*생성 날짜*/
    private String user_update; /*변경 날짜*/
    private String user_delete; /*삭제 날짜*/
    private boolean user_yn; /*사용유무*/
    private boolean user_stop_yn; /*사용자 신고 유무*/
    private String user_stop_date; /*사용자 신고 누적 시 날짜 적용*/
    private int user_total_pointer; /*사요앚 총 포인트*/
}
