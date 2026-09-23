package com.project.Joonggonara.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class meun_option_A {

    private int meun_option_code;/*메뉴판 코드 관리*/
    private String meun_option_name; /*메뉴판 이름*/
    private int meun_option_create; /*메뉴판 관리 생성날짜*/
    private boolean meun_option_calss_cheack; /*등급 [ 어드민 포함 or 미포함 체크 여부]*/
    private int meun_option_code_sub; /*메뉴판 코드 관리 [ 외래키 ]*/


}
