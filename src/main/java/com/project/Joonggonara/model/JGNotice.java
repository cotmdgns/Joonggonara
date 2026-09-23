package com.project.Joonggonara.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGNotice {

    private int JGNotice_code; /*게시글 코드*/
    private String JGNotice_title; /*게시글 제목*/
    private String JGNotice_text; /*게시글 내용*/
    private int uesr_code; /*사용자 정보 [외래키로 사용]*/
    private String JGNotice_create; /*게시글 생성날짜*/
    private String JGNotice_update; /*게시글 수정날짜*/
    private String JGNotice_delect; /*게시글 삭제날짜*/

}
