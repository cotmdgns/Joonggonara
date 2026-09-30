package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGUserInfoPointer {

    private int userCode; /*사용자 코드*/
    private int userPointer; /*사용자 포인트 [ 높을수록 신뢰가 높다 ]*/
    private String userPointerCreate; /*생성날짜*/

}
