package com.project.Joonggonara.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NoticeSubcribeDTO {

    private int noticeCode;
    private int userCode;
    private int whoUserCode;

}
