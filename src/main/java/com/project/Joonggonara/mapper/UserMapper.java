package com.project.Joonggonara.mapper;

import com.project.Joonggonara.model.vo.JGUserInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    String userIdCreate(JGUserInfo jgUserInfo);

}
