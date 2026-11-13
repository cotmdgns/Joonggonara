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

    public String nicknameCheck(String str){
        return userMapper.nicknameCheck(str);
    }

    // 사용자 코드로 이름 가져오기
    public String selectID(int code){
        return userMapper.selectID(code);
    }


    // 사용자 코드로 사용자 정보 찾아기
    public JGUserInfo selectUserInfo(int code){
        return userMapper.selectUserInfo(code);
    }

}
