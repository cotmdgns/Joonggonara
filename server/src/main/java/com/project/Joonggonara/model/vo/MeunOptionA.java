package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MeunOptionA {

    private int meunOptionCode;/*메뉴판 코드 관리*/
    private String meunOptionName; /*메뉴판 이름*/
    private int meunOptionCreate; /*메뉴판 관리 생성날짜*/
    private boolean meunOptionCalssCheack; /*등급 [ 어드민 포함 or 미포함 체크 여부]*/
    private int meunOptionCodeSub; /*메뉴판 코드 관리 [ 외래키 ]*/


}
