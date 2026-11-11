package com.project.Joonggonara.service;

import com.project.Joonggonara.model.dto.*;
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


    //******************************* 사용자 관리 페이지
    public List<JGUserInfo> userALlSelect(UserInfoPagingDTO dto){/* 전체 사용자 가져오기 */
        return mapper.userALlSelect(dto);
    };

    // 사용자 관리 페이지 [ 페이징 전용 데이터 ]
    public int userALLTotalPage(UserInfoPagingDTO dto){
        return mapper.userALLTotalPage(dto);
    };

    public int userALLTotal(){
        return mapper.userALLTotal();
    };
    public int userNormalTotal(){
        return mapper.userNormalTotal();
    };
    public int userDeleteTotal(){
        return mapper.userDeleteTotal();
    };
    public int userStopTotal(){
        return mapper.userStopTotal();
    };

    // 사용자 등급 변경하기
    public void rankUpdate(JGUserInfo jgUserInfo){
        mapper.rankUpdate(jgUserInfo);
    }
    // 사용자 계정 삭제하기
    public void userDelete(int code){
        mapper.userDelete(code);
    }
    // 1단계 사용자 계정복구하기
    public void userDeleteRollBack1(JGUserInfo jgUserInfo){
        mapper.userDeleteRollBack1(jgUserInfo);
    };
    // 2단계 사용자 계정복구하기
    public void userDeleteRollBack2(int code){
        mapper.userDeleteRollBack2(code);
    };

    // 사용자 계정 정지하기
    public void userStop(int code){
        mapper.userStop(code);
    }
    // 1단계 사용자 계정복구하기
    public void userStopRollBack1(JGUserInfo jgUserInfo){
        mapper.userStopRollBack1(jgUserInfo);
    };
    // 2단계 사용자 계정복구하기
    public void userStopRollBack2(int code){
        mapper.userStopRollBack2(code);
    };

    // 삭제 이력 조회
    public List<JGUserInfoBack> deleteHistory(int code){
        return mapper.deleteHistory(code);
    };
    // 정지 이력 조회
    public List<JGUserInfoBack> stopHistory(int code){
        return mapper.stopHistory(code);
    };


    //*********************** 신고 관리 페이지
    public List<UserDeclarationA> selectDeclaration(DeclarationDTO declarationDTO){  // 신고 전체 리스트 찾기
        return mapper.selectDeclaration(declarationDTO);
    };
    public void updateDeclaration(UpdateDeclarationDTO dto){
        mapper.updateDeclaration(dto);
    }

    public void updateUserInfo(UpdateDeclarationDTO dto){
        mapper.updateUserInfo(dto);
    };

    public int selectDeclarationTotal(DeclarationDTO declarationDTO){
        return mapper.selectDeclarationTotal(declarationDTO);
    }
    public String  selectName(int code){                // 사용자 코드로 이름 차직
        return mapper.selectName(code);
    }
    public String  noticeSelectName(int code){                // 사용자 코드로 이름 차직
        return mapper.selectName(code);
    }

    /* 총 토탈 */
    public int selectTotal(){
        return mapper.selectTotal();
    };
    public int selectStopTotal(){
        return mapper.selectStopTotal();
    };
    public int selectSuccessTotal(){
        return mapper.selectSuccessTotal();
    };
    public int selectBackTotal(){
        return mapper.selectBackTotal();
    };


    //******************************* 공지사항 관리 페이지
    // 페이징에 사용할 토탈 페이지
    public int totalPage(){
        return mapper.totalPage();
    }
    // [ 어드민 ] 공지사항 전체 조회하기
    public List<NotificationManagementDTO> adminNotificationManagementSelect(Criteria cri){
        return mapper.adminNotificationManagementSelect(cri);
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


    // 카테고리 마이너 리스트 전체 조회
    public List<CategoryStateMinor> categoryMinorListSelect(int code){
        return mapper.categoryMinorListSelect(code);
    };
    // 카테고리 마이너 리스트 생성
    public void categoryMinorListCreate(CategoryStateMinor categoryStateMinor){
        mapper.categoryMinorListCreate(categoryStateMinor);
    };
    // 카테고리 마이너 리스트 생성 후 업데이트
    public void categoryMinorListUpdate(CategoryStateMinor categoryStateMinor){
        mapper.categoryMinorListUpdate(categoryStateMinor);
    };
    // 카테고리 마이너 리스트 삭제
    public void categoryMinorListDelete(int code){
        mapper.categoryMinorListDelete(code);
    };

}
