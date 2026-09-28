package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.vo.JGUserInfo;
import com.project.Joonggonara.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Controller
public class UserController {

    @Autowired
    private UserService userService;


    /* 사용자 계정 만들기 */
    @ResponseBody
    @PostMapping("/userIdCreate")
    private boolean UserIdCreate(@RequestBody JGUserInfo jgUserInfo, Model model){

        // 사용자 이미지 칼럼에 랜덤값인 이미지 넣기
        int number = (int) (Math.random() * 5) + 1;
        jgUserInfo.setUserImg("../resources/img/profile/default" + number);

        int result = userService.UserIdCreate(jgUserInfo);

        System.out.println("데이터 확인하기 : " + result);
        System.out.println("데이터 확인하기 : " + jgUserInfo);

        if(result > 0 ){
            return true;
        }

        return false;
    }

    /* 사용자 로그인화면 */
    @PostMapping("/userLogin")
    private String UserLogin(JGUserInfo jgUserInfo){
        return null;
    }
}
