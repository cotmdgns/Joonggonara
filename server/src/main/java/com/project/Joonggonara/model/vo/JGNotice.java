package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGNotice {

    private int JGNoticeCode; /*게시글 코드*/
    private String JGNoticeTitle; /*게시글 제목*/
    private String JGNoticeText; /*게시글 내용*/
    private String JGNoticeProductPrice; /*게시글 제품 가격 */
    private String JGNoticeProductType; /*게시글 제품 구분 */
    private int uesrCode; /*사용자 정보 [외래키로 사용]*/
    private String JGNoticeCreate; /*게시글 생성날짜*/
    private String JGNoticeUpdate; /*게시글 수정날짜*/
    private String JGNoticeDelect; /*게시글 삭제날짜*/

}
