package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.vo.NotificationManagement;
import com.project.Joonggonara.service.MainService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/main/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class MainController {

    @Autowired
    private MainService mainService;

    @GetMapping("mainBannerSelectList")         // 공지사항에 있는 배너 사용중인 리스트 뽑아내기
    public List<NotificationManagement> mainBannerSelectList(){
        // 리스트로 담겨 있음
        return mainService.mainBannerSelect();
    }

}
