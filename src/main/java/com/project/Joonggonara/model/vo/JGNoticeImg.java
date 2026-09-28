package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGNoticeImg {

    private int JGNoticeImgCode; /*게시글 이미지 코드*/
    private String JGNoticeImg; /*게시글 이미지*/
    private int JGNoticeImgCreate; /*게시글 이미지 생살날짜*/
    private int JGNoticeCode; /*게시글 코드 [ 외래키 ]*/

}
