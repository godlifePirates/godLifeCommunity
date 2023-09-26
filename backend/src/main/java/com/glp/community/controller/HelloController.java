package com.glp.community.controller;

import com.glp.community.service.HelloService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
@RequiredArgsConstructor
public class HelloController {

    private final HelloService helloService;

    @GetMapping("/")
    public String hello() {
        return helloService.hello();
    }
}
