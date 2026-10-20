package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.vo.AddressInfo;
import com.project.Joonggonara.model.vo.JGUserInfo;
import com.project.Joonggonara.service.AddressService;
import com.project.Joonggonara.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Controller
@RequestMapping("/api/userInfo/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class UserController {


    // 사용자 서비스
    @Autowired
    private UserService userService;

    // DB 주소 서비스
    @Autowired
    private AddressService addressService;


    /* 사용자 계정 만들기 */
    @ResponseBody
    @PostMapping("/userIdCreate")
    public boolean UserIdCreate(@RequestBody JGUserInfo jgUserInfo, Model model){

        // 사용자 이미지 칼럼에 랜덤값인 이미지 넣기
        int number = (int) (Math.random() * 5) + 1;
        jgUserInfo.setUserImg("../resources/static/img/default" + number +".jpg");

        int result = userService.UserIdCreate(jgUserInfo);


        if(result > 0 ){
            return true;
        }

        return false;
    }

    /* 사용자 로그인화면 */
    @PostMapping("/userLogin")
    public String UserLogin(JGUserInfo jgUserInfo){
        return null;
    }





    // 사용자 회원가입

    // DB 주소 정보 가져오기
    @GetMapping("/addressAPI")
    public AddressInfo addressAPI() {

        return null;
    }

    // DB 주소 상세 정보 가져오기
}
