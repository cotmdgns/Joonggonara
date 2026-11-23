package com.project.Joonggonara.model.dto;

import com.project.Joonggonara.model.vo.Alram;
import com.project.Joonggonara.model.vo.Criteria;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AlramDetailDTO {

    private List<AlramDTO> alramList;        // 전체리스트
    private Criteria cri;
    private PageMakerDTO pageMakerDTO;

    // 토탈 데이터
    private int noticeTotal;
    private int noticeSubTotal;
    private int singoTotal;
    private int gonggiTotal;


}
