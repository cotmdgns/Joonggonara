package com.project.Joonggonara.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NoticeStateDTO {
    private int code; // 사용자 코드
    private String categoryMajor; // 게시글 메이져 카테고리
    private int categoryMinor; // 게시글 마이너 카테고리
    private int categoryMinorList; // 게시글 마이너 리스트 ( 이거 이름을 어떻게 지어야할지 모르겠음; )
    private String productName; // 상품 이름
    private String productPrice; // 상품 가격
    private boolean productFree;  // 상품 무료로 나눌꺼냐의 대한 조건
//    private String zonecode;// 지번?
//    private String roadAddress; // 검색주소
//    private String detailAddress; // 상세주소
    private String productInfo;  // 상품설명란
    private List<MultipartFile> imgs; // 상품 이미지
}
