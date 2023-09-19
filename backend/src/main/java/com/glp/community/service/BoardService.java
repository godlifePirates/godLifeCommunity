package com.glp.community.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.glp.community.data.dto.BoardDTO;
import com.glp.community.data.dto.request.MakeBoardRequestDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {

    public ResponseEntity<List<BoardDTO>> getBoardList() {

        List<BoardDTO> boardList = new ArrayList<>();

        return new ResponseEntity<>(boardList, HttpStatus.OK);
    }

    public ResponseEntity<String> makeBoard(MakeBoardRequestDTO dto) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<String> updateBoard(
        int boardId,
        MakeBoardRequestDTO dto) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<String> deleteBoard(int boardId) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
