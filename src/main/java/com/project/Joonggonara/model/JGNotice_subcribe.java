package com.project.Joonggonara.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGNotice_subcribe {

    private int JGNotice_subcribe_code; /*게시글 좋아요 코드*/
    private int JGNotice_code; /*게시글 코드 [ 외래키 ]*/
    private int JGNotice_subcribe_count; /*게시글 구독*/
    private int JGNotice_subcribe_create; /*구독 생성날자*/
    private int user_code; /*유저 코드 [ 외래키 ]*/

}
