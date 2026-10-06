package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MainBannerInfo {
    
    private int	mainBannerInfo; /* 배너 코드 */
    private String mainBannerTitle; /* 배너 제목 */
    private String mainBannerLinkText; /* 배너 제목 링크 */
    private String mainBannerText; /* 배너 내용 */
    
}
