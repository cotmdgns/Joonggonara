package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGNoticeComment {

    private int jGNoticeCommentCode; /*게시글 댓글*/
    private int userCode; /*사용자 코드 [ 외래키 ]*/
    private int jGNoticeCode; /*게시글 코드 [ 외래키 ]*/
    private String jGNoticeText; /*게시글 댓글*/
    private int jGNoticeCreate; /*댓글 생성날짜*/

}
