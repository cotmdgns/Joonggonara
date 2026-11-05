package com.project.Joonggonara.service;

import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGNoticeImg;
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
}
