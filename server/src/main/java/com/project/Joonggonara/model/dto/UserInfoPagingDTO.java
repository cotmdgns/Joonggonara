package com.project.Joonggonara.model.dto;

import com.project.Joonggonara.model.vo.Criteria;
import com.project.Joonggonara.model.vo.JGUserInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserInfoPagingDTO {

    private List<JGUserInfo> jgUserInfoList;
    private PageMakerDTO pageMake;
    private Criteria cri;


    private int code;
    private String userId;
    private String userManager;
    private String userStateBoo;

    // 전체 데이터 같이 보내기
    private int selectAll;              // 전체
    private int selectNormal;           // 정상
    private int selectStop;             // 정지
    private int selectDelete;           // 삭제
}
