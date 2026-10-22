package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.CategoryDTO;
import com.project.Joonggonara.service.AdminService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/admin/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class AdminController {

    @Autowired
    private AdminService adminService;


    // 카테고리 상태 보내기
    @GetMapping("categoryState")
    public CategoryDTO categoryState(){
//        이런식으로 제이슨 형태의 데이터를 보내야 내가 편할거 같음
//        {
//            "categoryText": "게임",
//            "categoryMinor": ["콜옵", "롤", "등등"]
//        },
//        {
//            "categoryText": "가전제품",
//            "categoryMinor": ["냉장고", "가스레인지", "전자렌지"]
//        }
        CategoryDTO dto = new CategoryDTO();



        return dto;
    }


}
