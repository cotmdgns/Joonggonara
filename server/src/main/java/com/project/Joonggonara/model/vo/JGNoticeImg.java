package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JGNoticeImg {

    private int jGNoticeImgCode; /*게시글 이미지 코드*/
    private String jGNoticeImg; /*게시글 이미지*/
    private String jGNoticeImgCreate; /*게시글 이미지 생살날짜*/
    private int jGNoticeCode; /*게시글 코드 [ 외래키 ]*/

}
