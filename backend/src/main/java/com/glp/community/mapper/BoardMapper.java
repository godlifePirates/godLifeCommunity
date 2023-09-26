package com.glp.community.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.glp.community.data.dto.BoardDTO;

@Repository
@Mapper
public interface BoardMapper {
    List<BoardDTO> getBoardList();
}
