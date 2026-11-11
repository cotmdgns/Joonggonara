package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDeclarationA {

    private int userDeclarationCode; /*사용자 신고 누적 코드*/
    private int userCode; /*사용자 코드 [ 외래키 ]*/
    private int noticeCode;     /* 게시글 코드 */
    private int noticeUserCode; /* 게시글 유저 코드 */
    private String noticeText;  /* 게시글 제목 */
    private String userDeclarationType; /* 신고 타입 ex)댓글이냐  게시글이냐 */
    private String userDeclarationOption; /*신고 사유*/
    private String userDeclarationText; /*신고 내용*/
    private String userDeclarationStateBoo; /* 신고 상태 [ 이용정지냐,신고반려냐,대상 컨텐츠삭제냐 */
    private String userDeclarationTextComment;  /* 신고 접수 내용 */
    private String userDeclarationCreate; /*신고 생성날짜*/
    private String userDeclarationBoo; /*신고 접수?*/

}
