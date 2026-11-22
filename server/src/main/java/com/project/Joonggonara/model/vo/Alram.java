package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Alram {

    private int alramCode;/* 알람 코드 */
    private String alramTitle;/* 알람 제목 (게시글인지, 신고인지, 공지사항인지) */
    private int alramTitleCode;/* 알람 제목 코드  */
    private String alramCreate; /* 알람 생성날짜 */
    private boolean alramState; /* 알람 코드 */
    private int userCode;

}
