package com.project.Joonggonara.model.dto;

import com.project.Joonggonara.model.vo.CategoryStateMajor;
import com.project.Joonggonara.model.vo.CategoryStateMinor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryDTO {

    private CategoryStateMajor categoryStateMajor;
    private List<CategoryStateMinor> categoryStateMinor;

    private CategoryStateMinor categoryStateMinorBig;
    private List<CategoryStateMinor> categoryStateMinorSmall;

}
