package com.project.Joonggonara.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGNotice_img {

    private int JGNotice_img_code; /*게시글 이미지 코드*/
    private String JGNotice_img; /*게시글 이미지*/
    private int JGNotice_img_create; /*게시글 이미지 생살날짜*/
    private int JGNotice_code; /*게시글 코드 [ 외래키 ]*/

}
