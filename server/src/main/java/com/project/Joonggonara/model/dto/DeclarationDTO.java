package com.project.Joonggonara.model.dto;

import com.project.Joonggonara.model.vo.UserDeclarationA;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DeclarationDTO {

    // 신고 접수할 때 사용
    private String type;
    private String arrText;
    private String singoText;
    private int userCode;
    private int noticeUserCode;
    private int noticeCode;
    private String noticeText;

    // 전체리스트 보낼 때 사용
    private UserDeclarationA userDeclarationA;
    private String userName;
    private String noticeUserName;

}
