package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.CategoryDTO;
import com.project.Joonggonara.model.dto.FormDataDTO;
import com.project.Joonggonara.model.vo.*;
import com.project.Joonggonara.service.AdminService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/admin/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class AdminController {
    @Autowired
    private AdminService adminService;
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 메인 관리 페이지 @@@@@@@@@@@@@@@@@@@@@@@/
    @GetMapping("mainSelectUseAll") /* <!-- 전체사용자 --> */
    public int mainSelectUseAll(){
        return adminService.mainSelectUseAll().size();
    };

    @GetMapping("mainSelectNoticeAll") /* <!-- 전체게시글 --> */
    public int mainSelectNoticeAll(){
        return adminService.mainSelectNoticeAll().size();
    };

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 공지사항 관리 페이지 @@@@@@@@@@@@@@@@@@@@@@@/
    @PostMapping("notificationManagementCreate") /* <!-- 전체 게시글 생성 --> */
    public int notificationManagementCreate(FormDataDTO formDataDTO){

        MultipartFile file = formDataDTO.getBannerFile();
    
        // 1. 이걸로 DB에 저장하기
        if (file != null && !file.isEmpty()) {
            NotificationManagement notificationManagement = new NotificationManagement();
            notificationManagement.setNotificationManagementCode(formDataDTO.getUserCode());
            notificationManagement.setNotificationManagementTitle(formDataDTO.getTitle());
            notificationManagement.setNotificationManagementBannerBoo(formDataDTO.getBannerBooState());
            notificationManagement.setNotificationManagementTitle(formDataDTO.getTextEditor());
            notificationManagement.setNotificationManagementImg(file.getOriginalFilename());
        }
        
        // 2. 로컬에 폴더 만들어서 저장하기


        log.info("폼 데이터 확인하기 : " + formDataDTO);
        return 0;
    };



    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@카테고리 관리 페이지 @@@@@@@@@@@@@@@@@@@@@@@/
    // 카테고리 상태 보내기  [ 정상작동 ]
    @GetMapping("CategoryState")
    public List<CategoryStateMajor> CategoryState(){
        List<CategoryStateMajor> categoryStateMajor = adminService.selectCategoryMajor();
        return categoryStateMajor;
    }

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

    //    <!--  카테고리 메이저 수정하기 [ 정상작동함 ] -->
    @PostMapping("CategoryMajorUpdate")
    public void CategoryMajorUpdate(@RequestBody CategoryStateMajor categoryStateMajor){
        adminService.CategoryMajorUpdate(categoryStateMajor);
    }
//    //    <!--  카테고리 마이너 전체 리스트 -->
    @PostMapping("CategoryMinorSelect/{code}")
    public List<CategoryStateMinor> CategoryMinorSelect(@PathVariable("code") int code){
        return adminService.SelectCategoryMinor(code);
    };

    //    <!--  카테고리 마이너 생성하기 [ 정상작동함 ]  -->
    @PostMapping("CategoryMinorCreate")
    public void CategoryMinorCreate(@RequestBody CategoryStateMinor categoryStateMinor){
        adminService.CategoryMinorCreate(categoryStateMinor);
    };

    //    <!--  카테고리 마이너 삭제하기  -->
    @PostMapping("CategoryMinorDelete/{code}")
    public void CategoryMinorDelete(@PathVariable("code") int code){
        adminService.CategoryMinorDelete(code);
    };
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/

}
