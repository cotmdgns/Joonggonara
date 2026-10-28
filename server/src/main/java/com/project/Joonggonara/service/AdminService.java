package com.project.Joonggonara.service;

import com.project.Joonggonara.model.dto.FormDataDTO;
import com.project.Joonggonara.model.dto.NotificationManagementDTO;
import com.project.Joonggonara.model.vo.*;
import mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private AdminMapper mapper;
    //******************************* 메인 관리 페이지
    /* <!-- 전체사용자 --> */
    public List<JGUserInfo> mainSelectUseAll(){
        return mapper.mainSelectUseAll();
    };
    /* <!-- 전체게시글 --> */
    public List<JGNotice> mainSelectNoticeAll(){
        return mapper.mainSelectNoticeAll();
    };

    //******************************* 공지사항 관리 페이지
    // [ 어드민 ] 공지사항 전체 조회하기
    public List<NotificationManagementDTO> adminNotificationManagementSelect(){
        return mapper.adminNotificationManagementSelect();
    };
    // [ 어드민, 일반] 공지사항 디테일 조회하기
    public NotificationManagementDTO notificationManagementSelectDetail(int code){
        return mapper.notificationManagementSelectDetail(code);
    };
    // 공지사항 생성하기
    public int notificationManagementCreate(NotificationManagement notificationManagement){
        return mapper.notificationManagementCreate(notificationManagement);
    };
    // 공지사항 생성 후 파일이름 추가(수정)
    public void notificationManagementImgNameUpdate(FormDataDTO formDataDTO){
        mapper.notificationManagementImgNameUpdate(formDataDTO);
    }
    // 공지사항 수정하기
    public void notificationManagementUpdate(NotificationManagement notificationManagement){
        mapper.notificationManagementUpdate(notificationManagement);
    };
    // 공지사항 삭제하기
    public void notificationManagementDelete(int code){
        mapper.notificationManagementDelete(code);
    };

    //******************************* 카테고리 관리 페이지
    // 카테고리 메이저 select
    public List<CategoryStateMajor> selectCategoryMajor(){
        return mapper.selectCategoryMajor();
    }

    // 카테고리 마이너 select
    public List<CategoryStateMinor> SelectCategoryMinor(int code){
        return mapper.SelectCategoryMinor(code);
    }

    //    <!--  카테고리 메이저 생성하기  -->
    public void CategoryMajorCreate(String text){
        mapper.CategoryMajorCreate(text);
    };

    //    <!--  카테고리 메이저 수정하기 -->
    public void CategoryMajorUpdate(CategoryStateMajor categoryStateMajor) {
        mapper.CategoryMajorUpdate(categoryStateMajor);
    }

    //    <!--  카테고리 메이저 삭제하기  -->
    public void CategoryMajorDelete(int code){
        mapper.CategoryMajorDelete(code);
    };
    //    <!--  카테고리 마이너 생성하기  -->
    public void CategoryMinorCreate(CategoryStateMinor categoryStateMinor){
        mapper.CategoryMinorCreate(categoryStateMinor);
    };
    //    <!--  카테고리 마이너 삭제하기  -->
    public void CategoryMinorDelete(int code){
        mapper.CategoryMinorDelete(code);
    };

}
