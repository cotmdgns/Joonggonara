package com.project.Joonggonara.controller;

import com.project.Joonggonara.jwt.JwtUtil;
import com.project.Joonggonara.model.vo.AddressInfo;
import com.project.Joonggonara.model.vo.AddressInfoDetail;
import com.project.Joonggonara.model.vo.JGUserInfo;
import com.project.Joonggonara.service.AddressService;
import com.project.Joonggonara.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

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

    // jwt 토큰
    @Autowired
    private JwtUtil jwtUtil;


    // 사용자 회원가입 [ 정상 작동 , 폴더생성 없는 찐빠있음 ]
    @ResponseBody
    @PostMapping("userIdCreate")
    public boolean UserIdCreate(@RequestBody JGUserInfo jgUserInfo){
        // 여기서 아이디 체크하고 있으면 닉네임 바꾸게 변경 고고뚠
        log.info("1. 데이터 확인하기 : " + jgUserInfo);
        String result =userService.nicknameCheck(jgUserInfo.getUserNickname());
        log.info("2. 데이터 확인하기 : " + result);
        if(result == null || result.isEmpty()){
            // 비어있거나 널이면 없다는거니깐 생성완료
            userService.UserIdCreate(jgUserInfo);
            return true;
        }else{
            // 닉네임 있다는거니깐 생성불가능하게
            return false;
        }
    }

    /* 사용자 로그인화면 [ 정상작동, 암호화된 데이터 비교 확인 True, 토큰값 제대로 나옴 ]*/
    @PostMapping("userLogin")
    public String UserLogin(@RequestBody JGUserInfo jgUserInfo){

        JGUserInfo info = userService.IdSelectAPI(jgUserInfo.getUserId());
        log.info("데이터 확인하기 : "  + info);

        // 데이터가 존재하지 않으며 null
        if(info == null){
            return "false";
        }

        // 암호화 찾기
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if(passwordEncoder.matches(jgUserInfo.getUserPwd(),info.getUserPwd())){
            String token = jwtUtil.createToken(info);
            log.info("토큰값 데이터 확인하기 : " + token);
            return token;
        }else{
            return "false";
        }
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


    public String fileUpload(MultipartFile file, int noticeCode, String url) throws IOException {
        // 랜덤한 이름값
        UUID uuid = UUID.randomUUID();
        // getOriginalFilename 이게 클라이언트에서 가져온 이미지 이름으로 변경?
        String fileName = uuid.toString()+"_"+file.getOriginalFilename();
        // File.separator 이거는 // 뜻
        // 디렉토리 경로
        File dir = new File(url + File.separator + noticeCode);
        if (!dir.exists()) {
            dir.mkdirs(); // 없으면 생성
        }
        File copyFile = new File(dir, fileName);
        file.transferTo(copyFile);
        return fileName;
    }
}
