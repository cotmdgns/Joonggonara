package com.project.Joonggonara.service;

import com.project.Joonggonara.model.dto.SearchDTO;
import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGNoticeImg;
import com.project.Joonggonara.model.vo.JGUserInfo;
import com.project.Joonggonara.model.vo.NotificationManagement;
import mapper.MainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainService {

    @Autowired
    private MainMapper mainMapper;

    // 메인에 사용되는 배너 사용중인 리스트
    public List<NotificationManagement> mainBannerSelect(){         // 공지사항에 있는 배너 사용중인 리스트 뽑아내기
        return mainMapper.mainBannerSelect();
    };

    // <!-- 카테고리 마이너 코드로 카테고리 이름 찾아내기 -->
    public String selectCategoryMinor(int code){
        return mainMapper.selectCategoryMinor(code);
    }
    // <!-- 생성 게시글 하나 생성하기 -->
    public void insertNotice(JGNotice notice){
        mainMapper.insertNotice(notice);
    };
    // <!-- 이미지 만들기 -->
    public void createImg(List<JGNoticeImg> list){
        mainMapper.createImg(list);
    }

    // 상세 리스트 가져오기 ( 검색도 가능함 , 페이징 걸고 한페이지 50개 )
    public List<JGNotice> searchNoticeSelect(SearchDTO dto){
        return mainMapper.searchNoticeSelect(dto);
    }
    public int searchNoticeSelectTotal(SearchDTO dto){
        return mainMapper.searchNoticeSelectTotal(dto);
    }

    public List<JGNoticeImg> searchNoticeSelectImg(int code){
        return mainMapper.searchNoticeSelectImg(code);
    };

    public JGNotice selectProductData(int code){
        return mainMapper.selectProductData(code);
    }

    public JGUserInfo selectUserInfoData(int code){
        return mainMapper.selectUserInfoData(code);
    }

    //  <!--    /* 전체리스트에서 최근에 판매된 */-->
    public String lastSaleNotice(int code){
        return mainMapper.lastSaleNotice(code);
    };
    // <!-- 총 판매한  -->
    public int totalSaleNotice(int code){
        return mainMapper.totalSaleNotice(code);
    };

    // 현재날짜로 일주일치 최신 게시글 가져오기
    public List<JGNotice> selectNoticeDATE(){
        return mainMapper.selectNoticeDATE();
    };
    // 사용자 정보로 근처 상품들 찾기
    public List<JGNotice> selectUserAddressNotification(int code){
        return mainMapper.selectUserAddressNotification(code);
    };
}
