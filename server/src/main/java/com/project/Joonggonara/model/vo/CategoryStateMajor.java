package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryStateMajor {

    private int categoryStateMajorCode;          /* 카테고리 메이저 코드 */
    private String categoryStateMajorText;       /* 카테고리 메이저 이름 */
    private String categoryStateMajorCreate;     /* 카테고리 메이저 생성날짜 */
}
