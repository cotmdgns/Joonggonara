package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryStateMinor {

    private int categoryStateMinorCode;         /* 카테고리 마이너 코드 */
    private int categoryStateMajorCode;         /* 카테고리 메이저 외래키 */
    private String categoryStateMinorText;      /* 카테고리 마이너 이름 */
    private String categoryStateMinorCreate;    /* 카테고리 마이너 생성날짜 */

}
