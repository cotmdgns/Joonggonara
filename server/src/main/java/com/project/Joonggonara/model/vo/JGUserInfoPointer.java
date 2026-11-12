package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JGUserInfoPointer {
    // 상품 결제 완료 시 0.6
    // 신고 당하면 -0.1
    // 게시글 삭제면 -0.2
    // 일주일 정시 -0.3
    // 
    private int pointerCode; /*PK*/
    private int userCode; /*사용자 코드*/
    private Double userPointer; /*사용자 포인트 [ 높을수록 신뢰가 높다 ]*/
    private String pointerReason; /* 포인ㅌ 사유 */
    private String userPointerCreate; /*생성날짜*/

}
