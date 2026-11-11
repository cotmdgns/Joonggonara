package com.project.Joonggonara.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NoticeDTO {

    private int jGNoticeCode; /*게시글 코드*/
    private String jGNoticeTitle; /*게시글 제목*/
    private String jGNoticeText; /*게시글 내용*/
    private String jGNoticeProductPrice; /*게시글 제품 가격 */
    private String JGNoticeProductTypeMajor; /*게시글 제품 구분 */
    private String JGNoticeProductTypeMinor; /*게시글 제품 구분 */
    private String JGNoticeProductTypeMinorList; /*게시글 제품 구분 */
    private int userCode; /*사용자 정보 [외래키로 사용]*/
    private String jGNoticeCreate; /*게시글 생성날짜*/
    private String jGNoticeUpdate; /*게시글 수정날짜*/
    private String jGNoticeDelect; /*게시글 삭제날짜*/
    private Boolean JGNoticeSaleBoo; /* 상품 판매 확인용도 */
    private String firstImgName;    /* 첫번째 이미지 이름 */
    private int firstImgCode;       /* 첫번째 이미지 코드 */
    private Boolean checkBoo;   /* 구독 체크하기 */
}
