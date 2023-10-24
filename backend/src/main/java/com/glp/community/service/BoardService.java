package com.glp.community.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.glp.community.data.dto.BoardDTO;
import com.glp.community.data.dto.request.MakeBoardRequestDTO;
import com.glp.community.mapper.BoardMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardMapper boardMapper;

    public ResponseEntity<List<BoardDTO>> getBoardList() {
        System.out.println("TEST+ZZZZZ");
        List<BoardDTO> boardList = boardMapper.getBoardList();
        System.out.println(boardList);
        System.out.println("TEST+XXXX");
        return new ResponseEntity<>(boardList, HttpStatus.OK);
    }

    public ResponseEntity<String> makeBoard(MakeBoardRequestDTO dto) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<String> updateBoard(
        int boardId,
        MakeBoardRequestDTO dto
    ) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<String> deleteBoard(int boardId) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<String> getPostListByBoardId(int boardId) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<String> getPostByBoardIdAndPostId(
        int boardId,
        int postId
    ) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<String> createPost(int boardId) {
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
