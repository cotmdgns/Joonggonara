package mapper;

import com.project.Joonggonara.model.vo.CategoryStateMajor;
import com.project.Joonggonara.model.vo.CategoryStateMinor;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {

    List<CategoryStateMajor> selectCategoryMajor();                   // 카테고리 메이저 찾기
    List<CategoryStateMinor> selectCategoryMinor(int code);     // 카테고리 마이너 찾기

    void CategoryMajorCreate(String text);//    <!--  카테고리 메이저 생성하기  -->
    void CategoryMajorDelete(int code);//    <!--  카테고리 메이저 삭제하기  -->
    void CategoryMinorCreate(CategoryStateMinor categoryStateMinor);//    <!--  카테고리 마이너 생성하기  -->
    void CategoryMinorDelete(int code);//    <!--  카테고리 마이너 삭제하기  -->
}
