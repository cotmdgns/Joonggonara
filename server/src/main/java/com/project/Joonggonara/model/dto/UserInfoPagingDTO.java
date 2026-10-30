package com.project.Joonggonara.model.dto;

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

    private int code;
    private String userName;
    private String userManager;
    private String userStateBoo;
}
