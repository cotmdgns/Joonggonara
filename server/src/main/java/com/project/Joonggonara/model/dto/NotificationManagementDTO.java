package com.project.Joonggonara.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NotificationManagementDTO {

    private int notificationManagementCode;         /* 공지사항 코드 */
    private int userCode;                           /* 유저코드 */
    private String userName;                           /* 유저이름 */
    private String notificationManagementTitle;     /* 공지사항 제목 */
    private String notificationManagementText;      /* 공지사항 내용 */
    private Boolean notificationManagementBannerBoo; /* 공지사항 배너 사용여부 */
    private Boolean notificationManagementBoo;       /* 공지사항 현재 사용여부 */
    private String notificationManagementImg;   /* 공지사항 이미지 */
    private String notificationManagementCreate; /* 공지사항 생성날짜 */

}
