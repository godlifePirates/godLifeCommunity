package com.glp.community.service;

import com.glp.community.configure.exceptions.UserNotFoundException;
import com.glp.community.data.dto.UserDTO;
import com.glp.community.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public ResponseEntity<String> join(UserDTO userDTO){

        userMapper.insertUser(userDTO);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    public UserDTO login(UserDTO userDTO){

        UserDTO userInfo = userMapper.loginUser(userDTO);
        if (userInfo == null){
            throw new UserNotFoundException("사용자가 존재하지 않습니다");
        }
        return  userInfo;
    }


    public int checkId(String userId) throws Exception{

        int existCnt = userMapper.checkId(userId);

        return existCnt;
    }
}
