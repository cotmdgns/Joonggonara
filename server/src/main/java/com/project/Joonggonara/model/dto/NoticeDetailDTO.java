package com.project.Joonggonara.model.dto;

import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGNoticeImg;
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
public class NoticeDetailDTO {

    private JGNotice notice;
    private JGUserInfo jgUserInfo;
    private List<JGNoticeImg> noticeImgs;

    private int saleTotal;      //  총 거래수
    private String lastSale;    // 마지막 거래

}
