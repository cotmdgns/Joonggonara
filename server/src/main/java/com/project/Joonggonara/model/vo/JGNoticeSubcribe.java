package com.project.Joonggonara.model.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JGNoticeSubcribe {

    private int jGNoticeSubcribeCode; /*게시글 좋아요 코드*/
    @JsonProperty("jGNoticeCode")
    private int jGNoticeCode; /*게시글 코드 [ 외래키 ]*/
    private String jGNoticeSubcribeCreate; /*구독 생성날자*/
    private int userCode; /*유저 코드 [ 외래키 ]*/

}
