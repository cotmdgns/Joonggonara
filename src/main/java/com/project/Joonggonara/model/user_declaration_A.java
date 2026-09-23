package com.project.Joonggonara.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class user_declaration_A {

    private int user_declaration_code; /*사용자 신고 누적 코드*/
    private int user_code; /*사용자 코드 [ 외래키 ]*/
    private String user_declaration_option; /*신고 사유*/
    private String user_declaration_text; /*신고 내용*/
    private int user_declaration_create; /*신고 생성날짜*/
    private boolean user_declaration_boo; /*신고 접수?*/

}
