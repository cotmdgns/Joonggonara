package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.CategoryDTO;
import com.project.Joonggonara.model.vo.CategoryStateMajor;
import com.project.Joonggonara.model.vo.CategoryStateMinor;
import com.project.Joonggonara.model.vo.NotificationManagement;
import com.project.Joonggonara.service.AdminService;
import com.project.Joonggonara.service.MainService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/main/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class MainController {

    @Autowired
    private MainService mainService;

    @Autowired
    private AdminService adminService;

    // 공지사항에 있는 배너 사용중인 리스트 뽑아내기
    @GetMapping("mainBannerSelectList")
    public List<NotificationManagement> mainBannerSelectList(){
        // 리스트로 담겨 있음
        return mainService.mainBannerSelect();
    }

    // 메뉴바에 사용할 카테고리 메이저 리스트
    @GetMapping("categoryMajorList")
    public List<CategoryStateMajor> categoryMajorList(){
        return adminService.selectCategoryMajor();
    }

    // 메뉴바에 사용할 카테고리 마이너 리스트
    @GetMapping("categoryMinorList/{code}")
    public List<CategoryDTO> categoryMinorList(@PathVariable("code")int code){
        // 이거 따로 분리해서 보내야 함씨아아아발
        List<CategoryDTO> dto = new ArrayList<>();
        List<CategoryStateMinor> categoryStateMinorList = adminService.SelectCategoryMinor(code);
        for(CategoryStateMinor list : categoryStateMinorList){
            List<CategoryStateMinor> aw = adminService.categoryMinorListSelect(list.getCategoryStateMinorCode());
            CategoryDTO data = CategoryDTO.builder()
                    .categoryStateMinorBig(list)
                    .categoryStateMinorSmall(aw)
                    .build();
            dto.add(data);
        }
        return dto;
    }
}
