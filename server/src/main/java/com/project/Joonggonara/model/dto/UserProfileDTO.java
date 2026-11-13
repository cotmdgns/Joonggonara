package com.project.Joonggonara.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserProfileDTO {

    private int userCode;
    private MultipartFile userProfile;
    private String userProfileName;
    private String userNickName;
    private String userOldPwd;
    private String userNewPwd;
    private String userNewPwdCheck ;
    private String userAddress;
    private String userAddressDetail;
    private String addressData;
    private String addressDetailData ;
    private String userInfoData;

}
