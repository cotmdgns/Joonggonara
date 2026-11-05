package com.project.Joonggonara.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SearchDTO {
    private String search;        // 검색용
    private String title1;          // Major title
    private String title2;          // Minor title1
    private String title3;          // Minor titleList2
}
