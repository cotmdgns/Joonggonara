package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGNoticeSubcribe {

    private int jGNoticeSubcribeCode; /*게시글 좋아요 코드*/
    private int jGNoticeCode; /*게시글 코드 [ 외래키 ]*/
    private int jGNoticeSubcribeCount; /*게시글 구독*/
    private int jGNoticeSubcribeCreate; /*구독 생성날자*/
    private int userCode; /*유저 코드 [ 외래키 ]*/

}
