package com.project.Joonggonara.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGNotice_comment {

    private int JGNotice_comment_code; /*게시글 댓글*/
    private int user_code; /*사용자 코드 [ 외래키 ]*/
    private int JGNotice_code; /*게시글 코드 [ 외래키 ]*/
    private String JGNotice_text; /*게시글 댓글*/
    private int JGNotice_create; /*댓글 생성날짜*/

}
