package com.project.Joonggonara.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FormDataDTO {
    // 게시글 생성할 때 받을 DTO [ 이미지 떄문에 ]
    private int userCode;
    private String title;
    private String textEditor;
    private Boolean bannerBooState;
    private MultipartFile bannerFile;

    private String titleUpdateState;
    private String textEditorUpdateState;

    private int code;
    private String fileName;
}
