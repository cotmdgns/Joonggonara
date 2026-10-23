package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JGNotice {

    private int jGNoticeCode; /*게시글 코드*/
    private String jGNoticeTitle; /*게시글 제목*/
    private String jGNoticeText; /*게시글 내용*/
    private String jGNoticeProductPrice; /*게시글 제품 가격 */
    private String jGNoticeProductType; /*게시글 제품 구분 */
    private int userCode; /*사용자 정보 [외래키로 사용]*/
    private String jGNoticeCreate; /*게시글 생성날짜*/
    private String jGNoticeUpdate; /*게시글 수정날짜*/
    private String jGNoticeDelect; /*게시글 삭제날짜*/

}
