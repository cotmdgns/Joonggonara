package com.project.Joonggonara.service;

import com.project.Joonggonara.model.vo.AddressInfo;
import com.project.Joonggonara.model.vo.AddressInfoDetail;
import mapper.AddressMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

    @Autowired
    private AddressMapper addressMapper;


    // DB 주소 api
    public List<AddressInfo> addressAPI(){
        return addressMapper.addressAPI();
    }

    public List<AddressInfoDetail> addressDetailAPI(int code){
        return addressMapper.addressDetailAPI(code);
    }
}
