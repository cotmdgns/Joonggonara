package com.project.Joonggonara.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
@Builder
public class NotificationManagementPageDTO {

    private List<NotificationManagementDTO> notificationManagementList;
    private PageMakerDTO pageMake;

}
