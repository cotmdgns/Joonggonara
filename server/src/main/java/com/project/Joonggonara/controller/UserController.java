package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.vo.AddressInfo;
import com.project.Joonggonara.model.vo.AddressInfoDetail;
import com.project.Joonggonara.model.vo.JGUserInfo;
import com.project.Joonggonara.service.AddressService;
import com.project.Joonggonara.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/userInfo/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class UserController {


    // 사용자 서비스
    @Autowired
    private UserService userService;

    // DB 주소 서비스
    @Autowired
    private AddressService addressService;


    // 사용자 회원가입 [ 정상 작동 , 폴더생성 없는 찐빠있음 ]
    @ResponseBody
    @PostMapping("userIdCreate")
    public boolean UserIdCreate(@RequestBody JGUserInfo jgUserInfo){

        // 사용자 이미지 칼럼에 랜덤값인 이미지 넣기
        int number = (int) (Math.random() * 5) + 1;
        jgUserInfo.setUserImg("../resources/static/img/default" + number +".jpg");

        // 폴더 생성해야하는데.. 씁
        int result = userService.UserIdCreate(jgUserInfo);
        return true;
    }

    /* 사용자 로그인화면 */
    @PostMapping("userLogin")
    public JGUserInfo UserLogin(@RequestBody JGUserInfo jgUserInfo){
        JGUserInfo info = userService.IdSelectAPI(jgUserInfo.getUserId());

        if(info.getUserPwd().equals(jgUserInfo.getUserPwd())){
            // 성공하면 아이디랑 이름정도만 보내기
            // 씁박 시큐리티 사용해서 관리해야겠다..
            return info;
        }
        return null;
    }


    // 아이디 체크하기 [ 정상작동함 ]
    @PostMapping("idCheckAPI")
    public boolean IdCheckAPI(@RequestBody String userId){
        log.info("데이터 확인하기 : "  + userId);
        Boolean boo = userService.IdCheckAPI(userId);
        return boo;
    }



    // DB 주소 정보 가져오기 [ 정상 작동함 ]
    @GetMapping("addressAPI")
    public List<AddressInfo> addressAPI() {
        List<AddressInfo> addressInfo =  addressService.addressAPI();
        return addressInfo;
    }

    // DB 주소 상세 정보 가져오기 [ 정상 작동함 ]
    @GetMapping("addressDetailAPI/{name}")
    public List<AddressInfoDetail> addressDetailAPI(@PathVariable String name) {
        int code = addressService.addressCode(name);
        List<AddressInfoDetail> addressInfo =  addressService.addressDetailAPI(code);
        return addressInfo;
    }
}
