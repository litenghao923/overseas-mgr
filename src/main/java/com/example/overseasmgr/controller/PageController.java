package com.example.overseasmgr.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PageController {

    @GetMapping("login")
    public String goLogin(){
        return "login";
    }

    @GetMapping("index")
    public String goIndex(){
        return "index";
    }
}
