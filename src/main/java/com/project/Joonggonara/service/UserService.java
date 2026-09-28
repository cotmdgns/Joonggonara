package com.project.Joonggonara.service;

import com.project.Joonggonara.mapper.UserMapper;
import com.project.Joonggonara.model.vo.JGUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public String UserIdCreate(JGUserInfo jgUserInfo){
        userMapper.userIdCreate(jgUserInfo);
        return null;
    }

}
