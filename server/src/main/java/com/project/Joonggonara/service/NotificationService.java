package com.project.Joonggonara.service;

import com.project.Joonggonara.model.dto.NotificationManagementDTO;
import com.project.Joonggonara.model.vo.Criteria;
import com.project.Joonggonara.model.vo.NotificationManagement;
import mapper.NotificationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationMapper mapper;

    @Autowired
    private AdminService adminService;

    // 공지사항 리스트 [ 페이징 적용 완료, 정렬 완료 ]
    public List<NotificationManagementDTO> selectNotification(Criteria cri){
        return mapper.selectNotification(cri);
    };

    // 공지사항 상제 조회
    public NotificationManagementDTO selectNotificationDetail(int code){
        return mapper.selectNotificationDetail(code);
    };

    // 토탈
    public int total(){
        return mapper.total();
    }

}
