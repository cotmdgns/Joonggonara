package com.project.Joonggonara.service;

import com.project.Joonggonara.model.vo.NotificationManagement;
import mapper.MainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainService {

    @Autowired
    private MainMapper mainMapper;

    public List<NotificationManagement> mainBannerSelect(){         // 공지사항에 있는 배너 사용중인 리스트 뽑아내기
        return mainMapper.mainBannerSelect();
    };
}
