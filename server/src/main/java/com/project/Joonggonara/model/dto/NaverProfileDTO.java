package com.project.Joonggonara.model.dto;

import lombok.Data;

@Data
public class NaverProfileDTO {

    private String resultcode;
    private String message;
    private NaverProfileResponseDTO response;

}
