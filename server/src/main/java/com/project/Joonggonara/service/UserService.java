package com.project.Joonggonara.service;

import lombok.extern.slf4j.Slf4j;
import mapper.UserMapper;
import com.project.Joonggonara.model.vo.JGUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
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
}
