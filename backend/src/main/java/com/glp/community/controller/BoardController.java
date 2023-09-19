package com.glp.community.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.glp.community.data.dto.BoardDTO;
import com.glp.community.data.dto.request.MakeBoardRequestDTO;
import com.glp.community.service.BoardService;

import lombok.RequiredArgsConstructor;

@RestController("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/")
    public ResponseEntity<List<BoardDTO>> getBoardList(){
        return boardService.getBoardList();
    }

    @PostMapping("/")
    public ResponseEntity<String> makeBoard(@RequestBody
                                            MakeBoardRequestDTO dto
                                            ){
        return boardService.makeBoard(dto);
    }

    @PutMapping("/{boardId}")
    public ResponseEntity<String> updateBoard(
        @PathVariable int boardId,
        @RequestBody MakeBoardRequestDTO dto
    ) {
        return boardService.updateBoard(boardId, dto);
    }

    @DeleteMapping("/{boardId}")
    public ResponseEntity<String> deleteBoard(
        @PathVariable int boardId
    ) {
        return boardService.deleteBoard(boardId);
    }

    @GetMapping("/{boardId}")
    public ResponseEntity<String> getPostByBoardId(@PathVariable int boardId){
        
    }
}
