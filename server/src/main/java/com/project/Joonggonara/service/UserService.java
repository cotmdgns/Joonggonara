package com.project.Joonggonara.service;

import mapper.UserMapper;
import com.project.Joonggonara.model.vo.JGUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    // 사용자 계정 생성
    public int UserIdCreate(JGUserInfo jgUserInfo){
        return userMapper.userIdCreate(jgUserInfo);
    }

}
