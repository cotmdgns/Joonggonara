package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class userDeclarationA {

    private int userDeclarationCode; /*사용자 신고 누적 코드*/
    private int userCode; /*사용자 코드 [ 외래키 ]*/
    private String userDeclarationOption; /*신고 사유*/
    private String userDeclarationText; /*신고 내용*/
    private int userDeclarationCreate; /*신고 생성날짜*/
    private boolean userDeclarationBoo; /*신고 접수?*/

}
