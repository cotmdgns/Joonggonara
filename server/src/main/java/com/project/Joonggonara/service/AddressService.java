package com.project.Joonggonara.service;

import com.project.Joonggonara.model.vo.AddressInfo;
import mapper.AddressMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    @Autowired
    private AddressMapper addressMapper;


    // DB 주소 api
    public AddressInfo addressAPI(AddressInfo addressInfo){
        return addressMapper.addressAPI();
    }
}
