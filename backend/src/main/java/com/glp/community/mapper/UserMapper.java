package com.glp.community.mapper;


import com.glp.community.data.dto.UserDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserMapper {

    void insertUser(UserDTO userDTO);

    UserDTO loginUser(UserDTO userDTO);

    int checkId(String userId);
}
