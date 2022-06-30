package com.example.overseasmgr.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("market")
public class CoinController {

    @GetMapping("exchange")
    public String goExchangeList(){
        return "market/exchange-list";
    }

    @GetMapping("stable")
    public String goStableCoinList(){
        return "market/stable-coin";
    }
}
