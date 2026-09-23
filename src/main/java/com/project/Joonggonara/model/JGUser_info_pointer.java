package com.project.Joonggonara.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGUser_info_pointer {

    private int user_code; /*사용자 코드*/
    private int user_pointer; /*사용자 포인트 [ 높을수록 신뢰가 높다 ]*/
    private String user_pointer_create; /*생성날짜*/

}
