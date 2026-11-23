package com.project.Joonggonara.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
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
public class AlramDTO {

    // 클라이언트에서 받은 데이터
    private int userCode;
    private int PageNum;
    private String title;


    private Alram alramList;        // 전체리스트
    private Criteria cri;
    private PageMakerDTO pageMakerDTO;


    // 공지사항에 보낼 데이터들
    private int whoUserCode;
    private List<Integer> codeList;
    private int alramTitleCode;

    // 전체게시글에 보낼 때 사용하는 데이터 모음
    private String alramTitle;
    private String alramImg;
    private String userName;

}
