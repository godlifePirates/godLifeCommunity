package com.glp.community.controller;

import com.glp.community.configure.exceptions.UserNotFoundException;
import com.glp.community.data.dto.UserDTO;
import com.glp.community.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {


    @Autowired
    private UserService userService;
    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody UserDTO userDTO) {

        return userService.join(userDTO);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String,Object>> login (@RequestBody UserDTO userDTO){

           Map<String,Object> result = new HashMap<>();
           try{
               UserDTO userInfo = userService.login(userDTO);
               result.put("userInfo", userInfo);

           }catch(UserNotFoundException e) {
               result.put("msg",e.getMessage());
        }
        return ResponseEntity.ok(result);

    }


}
