package com.project.Joonggonara.controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.project.Joonggonara.jwt.JwtUtil;
import com.project.Joonggonara.model.dto.UserProfileDTO;
import com.project.Joonggonara.model.vo.AddressInfo;
import com.project.Joonggonara.model.vo.AddressInfoDetail;
import com.project.Joonggonara.model.vo.JGUserInfo;
import com.project.Joonggonara.service.AddressService;
import com.project.Joonggonara.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
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

    @Autowired
    private Cloudinary cloudinary;

    private String userFile = "C:\\github\\img\\userProfile\\";

    // 이전 디폴트 사진들 파일 위치
//    private String defaultImg =  "C:\\github\\img\\default\\";;
    // 클라우드로 변경함으로써 파일 위치 변경됨
    private final String[] defaultFileName = {
            "https://res.cloudinary.com/ajahryws/image/upload/v1795498119/default1.jpg",
            "https://res.cloudinary.com/ajahryws/image/upload/v1795498119/default2.jpg",
            "https://res.cloudinary.com/ajahryws/image/upload/v1795498119/default3.jpg",
            "https://res.cloudinary.com/ajahryws/image/upload/v1795498120/default4.jpg",
            "https://res.cloudinary.com/ajahryws/image/upload/v1795498121/default5.jpg"
    };


    // 사용자 회원가입 [ 정상 작동 ]
    @ResponseBody
    @PostMapping("userIdCreate")
    public boolean UserIdCreate(@RequestBody JGUserInfo jgUserInfo){

        // 여기서 아이디 체크하고 있으면 닉네임 바꾸게 변경 고고뚠
        String result =userService.nicknameCheck(jgUserInfo.getUserNickname());
        if(result == null || result.isEmpty()){
            try {
                // 1. 첫번 쨰 사용자 아이디를 만들고
                //    PK코드를 받은 다음 클라우드에 전달해줘서 사용자 폴더를 만들어 줘야 함
                // 비밀번호 암호화
                PasswordEncoder encoder = new BCryptPasswordEncoder();
                jgUserInfo.setUserPwd(encoder.encode(jgUserInfo.getUserPwd()));
                userService.UserIdCreate(jgUserInfo);

                log.info("데이터 확인하기 생성 후 : " + jgUserInfo);

                // 2. 생성 후 사용자 코드로 폴더위치와 폴더이름 정하고 생성해야 한다.
                // 사용자 디폴트 이미지는 클라우드에 위치해 있고 final로 있는 배열 하나 url선택해서 사용자 DB에 끼워두기
                int number = (int) (Math.random() * 5) ;
                String defaultImg = defaultFileName[number];

                // 저장할 파일 위치
                String cloudFile = "joonggonara/userProfile/" + jgUserInfo.getUserCode();

                // Cloudinary에 기본 이미지 업로드
                Map uploadResult = cloudinary.uploader().upload(
                        defaultImg,
                        ObjectUtils.asMap(
                                "asset_folder", cloudFile,
                                "public_id", "profile"
                        )
                );

                // 3. 생성 후 리턴값으로 받은 데이터로 따로 사용자 코드로 이미지 변경해야 함
                //    여기까지 하면 끝~
                // 업로드된 이미지 URL 가져오기
                String imageUrl = (String) uploadResult.get("secure_url");
                jgUserInfo.setUserImg(imageUrl);
                log.info("데이터 확인하기 업데이트 전: " + jgUserInfo);
                userService.userImgUpdate(jgUserInfo);

            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            return true;
        }else{
            // 닉네임 있다는거니깐 생성불가능하게
            return false;
        }
    }


//    // 사용자 회원가입 [ 정상 작동 ]
    // localhost에서 사용했던 방식이라 현재는 사용하지 않음
//    @ResponseBody
//    @PostMapping("userIdCreate")
//    public boolean UserIdCreate(@RequestBody JGUserInfo jgUserInfo){
//        log.info("데이터 확인하기 : " + jgUserInfo);
//
//        // 여기서 아이디 체크하고 있으면 닉네임 바꾸게 변경 고고뚠
//        String result =userService.nicknameCheck(jgUserInfo.getUserNickname());
//        if(result == null || result.isEmpty()){
//
//            Path directoryPath = Paths.get(userFile + jgUserInfo.getUserCode() + "\\");
//
//            try {
//                Files.createDirectories(directoryPath);
//
//                int number = (int) (Math.random() * 5) + 1;
//
//                File file = new File(defaultImg + "default"+ number + ".jpg");
//                File newFile = new File(userFile + jgUserInfo.getUserId() + "\\userProfile\\default"+ number + ".jpg");
//                FileUtils.copyFile(file, newFile);
//
//                // 비밀번호 암호화
//                jgUserInfo.setUserImg("default" + number +".jpg");
//                PasswordEncoder encoder = new BCryptPasswordEncoder();
//                jgUserInfo.setUserPwd(encoder.encode(jgUserInfo.getUserPwd()));
//                userService.UserIdCreate(jgUserInfo);
//
//            } catch (Exception e) {
//                throw new RuntimeException(e);
//            }
//            return true;
//        }else{
//            // 닉네임 있다는거니깐 생성불가능하게
//            return false;
//        }
//    }

    /* 사용자 로그인화면 [ 정상작동, 암호화된 데이터 비교 확인 True, 토큰값 제대로 나옴 ]*/
    @PostMapping("userLogin")
    public String UserLogin(@RequestBody JGUserInfo jgUserInfo){

        JGUserInfo info = userService.IdSelectAPI(jgUserInfo.getUserId());

        // 데이터가 존재하지 않으며 null
        if(info == null){
            log.info("사용자 아이디 없음");
            return "false";
        }

        if(info.getUserStopDate() != null || info.getUserDelete() != null){
            log.info("정지된 아이디 및 삭제된 아이디임");
            return "stop";
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
        log.info("데이터 확인하기 : "  + userId.replace("=",""));
        Boolean boo = userService.IdCheckAPI(userId.replace("=",""));

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




    // 사용자 이미지 변경할 때 사용할 메서드
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



