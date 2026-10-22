package com.project.Joonggonara.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class PageController {

    @GetMapping("/")
    public String main(){
        return "page/main";
    }



}
