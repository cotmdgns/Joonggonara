package com.project.Joonggonara.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressInfo {

    private int addressCode; // 주소코드
    private String addressName; // 주소정보
}
