package com.project.Joonggonara.model.dto;

import com.project.Joonggonara.model.vo.Criteria;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SearchDTO {
    private int num;
    private String search;          // 검색용
    private String title1;          // Major title
    private String title2;          // Minor title1
    private String title3;          // Minor titleList2
    private String price1;          // 금액에서 ~
    private String price2;          // ~ 금액까지
    private String address1;        // 지역 (서울, 경기도, 대전, 대구... )
    private String address2;        // 지역 (강남, 서초, 성남 ... )

    private Criteria cri;

}
