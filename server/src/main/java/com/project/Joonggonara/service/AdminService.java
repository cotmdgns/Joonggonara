package com.project.Joonggonara.service;

import com.project.Joonggonara.model.vo.CategoryStateMajor;
import com.project.Joonggonara.model.vo.CategoryStateMinor;
import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGUserInfo;
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
