package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.NotificationManagementDTO;
import com.project.Joonggonara.model.dto.NotificationManagementPageDTO;
import com.project.Joonggonara.model.dto.PageMakerDTO;
import com.project.Joonggonara.model.vo.Criteria;
import com.project.Joonggonara.model.vo.NotificationManagement;
import com.project.Joonggonara.service.AdminService;
import com.project.Joonggonara.service.NotificationService;
import com.project.Joonggonara.service.UserService;
import lombok.extern.slf4j.Slf4j;
import mapper.NotificationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/notification/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class NotificationController {   // 공지사항 컨트롤러

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private AdminService adminService;

    @Autowired
    private UserService userService;

    @GetMapping("selectNotification") /* <!-- [ 어드민, 일반 ] 공지사항 전체조회 [ 정상작동 ] --> */
    public NotificationManagementPageDTO selectNotification(
            @RequestParam(defaultValue = "1") int code,
            Criteria cri){

        cri.setPageNum(code);
        // 리스트 안에 사용자 이름 넣고 보내기
        List<NotificationManagementDTO> notificationManagementList = notificationService.selectNotification(cri);
        for(NotificationManagementDTO list : notificationManagementList){
            String name = userService.selectID(list.getUserCode());
            list.setUserName(name);
        }
        int total = notificationService.total();

        PageMakerDTO pageMake = new PageMakerDTO(cri, total);
        NotificationManagementPageDTO notificationManagementPageDTO = NotificationManagementPageDTO.builder()
                .notificationManagementList(notificationManagementList)
                .pageMake(pageMake)
                .build();
        return notificationManagementPageDTO;
    };

    @GetMapping("selectNotificationDetail/{code}") /* <!-- [ 어드민, 일반 ] 공지사항 상세(디테일) 조회 --> */
    public NotificationManagementDTO selectNotificationDetail(@PathVariable("code")int code){
        return notificationService.selectNotificationDetail(code);
    };

}
