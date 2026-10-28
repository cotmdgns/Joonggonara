package com.project.Joonggonara.service;

import lombok.extern.slf4j.Slf4j;
import mapper.UserMapper;
import com.project.Joonggonara.model.vo.JGUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    // 사용자 계정 생성
    public int UserIdCreate(JGUserInfo jgUserInfo){
        // 사용자 이미지 칼럼에 랜덤값인 이미지 넣기
        int number = (int) (Math.random() * 5) + 1;
        jgUserInfo.setUserImg("../resources/static/img/default" + number +".jpg");

        // 폴더 생성해야하는데.. 씁

        // 비밀번호 암호화
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        jgUserInfo.setUserPwd(encoder.encode(jgUserInfo.getUserPwd()));

        log.info("데이터 확인하기 : " + jgUserInfo.getUserPwd());

        return userMapper.userIdCreate(jgUserInfo);
    }

    // 사용자 아이디 체크하기
    public boolean IdCheckAPI(String str){
        JGUserInfo jgUserInfo = userMapper.IdCheckAPI(str);
        if(jgUserInfo == null){
            return false;
        }else{
            return true;
        }
    }

    // 사용자 아이디 가져오기
    public JGUserInfo IdSelectAPI(String str){

        return userMapper.IdCheckAPI(str);
    }

    // 사용자 코드로 이름 가져오기
    public String selectID(int code){
        return userMapper.selectID(code);
    }
}
