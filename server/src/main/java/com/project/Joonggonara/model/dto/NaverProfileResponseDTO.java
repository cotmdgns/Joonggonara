package com.project.Joonggonara.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class NaverProfileResponseDTO {

    private String id;
    private String email;
    private String nickname;
    private String name;

    @JsonProperty("profile_image")
    private String profileImage;

    private String gender;
    private String age;
    private String birthday;
    private String birthyear;
    private String mobile;

}
