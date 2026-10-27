package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotificationManagement {

    private int notificationManagementCode;         /* 공지사항 코드 */
    private String notificationManagementTitle;     /* 공지사항 제목 */
    private String notificationManagementText;      /* 공지사항 내용 */
    private String notificationManagementBannerBoo; /* 공지사항 배너 사용여부 */
    private String notificationManagementBoo;       /* 공지사항 현재 사용여부 */
    private String notificationManagementImg;   /* 공지사항 이미지 */
}
