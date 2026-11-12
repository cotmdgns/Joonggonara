package com.project.Joonggonara.service;

import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGUserInfo;
import mapper.PageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PageService {

    @Autowired
    private PageMapper mapper;

    public JGUserInfo selectUserInfo(int code){
        return mapper.selectUserInfo(code);
    }

    public List<JGNotice> selectUserProduct(int code){
        return mapper.selectUserProduct(code);
    };
    public List<JGNotice> purchaseHistoryProduct(int code){
        return mapper.purchaseHistoryProduct(code);
    };
    public List<JGNotice> interestProduct(int code){
        return mapper.interestProduct(code);
    };
    public List<JGNotice> saleProduct(int code){
        return mapper.saleProduct(code);
    };
    public List<JGNotice> buyProduct(int code){
        return mapper.buyProduct(code);
    };
    public List<JGNotice> freeProduct(int code){
        return mapper.freeProduct(code);
    };

}
