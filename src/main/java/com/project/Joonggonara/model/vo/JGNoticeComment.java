package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGNoticeComment {

    private int JGNoticeCommentCode; /*게시글 댓글*/
    private int usercode; /*사용자 코드 [ 외래키 ]*/
    private int JGNoticeCode; /*게시글 코드 [ 외래키 ]*/
    private String JGNoticeText; /*게시글 댓글*/
    private int JGNoticeCreate; /*댓글 생성날짜*/

}
