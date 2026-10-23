package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.CategoryDTO;
import com.project.Joonggonara.model.vo.CategoryStateMajor;
import com.project.Joonggonara.model.vo.CategoryStateMinor;
import com.project.Joonggonara.service.AdminService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/admin/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class AdminController {
    @Autowired
    private AdminService adminService;

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@카테고리 관리 페이지 @@@@@@@@@@@@@@@@@@@@@@@/
    // 카테고리 상태 보내기  [ 정상작동 ]
    @GetMapping("CategoryState")
    public List<CategoryDTO> CategoryState(){
//        이런식으로 제이슨 형태의 데이터를 보내야 내가 편할거 같음
//        {
//            "categoryText": "게임",
//            "categoryMinor": ["콜옵", "롤", "등등"]
//        },
//        {
//            "categoryText": "가전제품",
//            "categoryMinor": ["냉장고", "가스레인지", "전자렌지"]
//        }
        List<CategoryDTO> categoryDTO = new ArrayList<>();
        List<CategoryStateMajor> categoryStateMajor = adminService.selectCategoryMajor();
//        log.info("데이터 확안하기 categoryStateMajor : " + categoryStateMajor);
        for(CategoryStateMajor categoryMajor : categoryStateMajor){
            CategoryDTO dto = new CategoryDTO();
            dto.setCategoryStateMajor(categoryMajor);
            List<CategoryStateMinor> categoryStateMinor = adminService.selectCategoryMinor(categoryMajor.getCategoryStateMajorCode());
            dto.setCategoryStateMinor(categoryStateMinor);
            categoryDTO.add(dto);
        }
//        log.info("데이터 확안하기 dto : " + categoryDTO);
        return categoryDTO;
    }
    //  <!-- 카테고리 메이저 수정 모달창 열 떄 사용할 데이터 -->

    //    <!--  카테고리 메이저 생성하기 [ 정상 작동함 ]  -->
    @PostMapping("CategoryMajorCreate")
    public void CategoryMajorCreate(@RequestBody CategoryStateMajor categoryStateMajor){
        String text = categoryStateMajor.getCategoryStateMajorText();
        adminService.CategoryMajorCreate(text);
    };

    //    <!--  카테고리 메이저 삭제하기 [ 정상작동함 ] -->
    @PostMapping("CategoryMajorDelete/{code}")
    public void CategoryMajorDelete(@PathVariable("code") int code){
        adminService.CategoryMajorDelete(code);
    };
    //    <!--  카테고리 마이너 생성하기  -->
    @PostMapping("CategoryMinorCreate")
    public void CategoryMinorCreate(@RequestBody CategoryStateMinor categoryStateMinor){
        adminService.CategoryMinorCreate(categoryStateMinor);
    };
    //    <!--  카테고리 마이너 삭제하기  -->
    @PostMapping("CategoryMinorDelete")
    public void CategoryMinorDelete(@RequestBody int code){
        adminService.CategoryMinorDelete(code);
    };
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/

}
