package com.glp.community.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glp.community.data.dto.BoardDTO;
import com.glp.community.data.dto.request.MakeBoardRequestDTO;
import com.glp.community.service.BoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/")
    public ResponseEntity<List<BoardDTO>> getBoardList(){
        System.out.println("TEST11111");

        return boardService.getBoardList();
    }

    @PostMapping("/")
    public ResponseEntity<String> makeBoard(@RequestBody
                                            MakeBoardRequestDTO dto
                                            ){
        System.out.println("TEST4444");
        return boardService.makeBoard(dto);
    }

    @PutMapping("/{boardId}")
    public ResponseEntity<String> updateBoard(
        @PathVariable int boardId,
        @RequestBody MakeBoardRequestDTO dto
    ) {
        System.out.println("TEST3333");
        return boardService.updateBoard(boardId, dto);
    }

    @DeleteMapping("/{boardId}")
    public ResponseEntity<String> deleteBoard(
        @PathVariable int boardId
    ) {
        return boardService.deleteBoard(boardId);
    }

    @GetMapping("/{boardId}")
    public ResponseEntity<String> getPostListByBoardId(@PathVariable int boardId){
        System.out.println("TEST2222");
        return boardService.getPostListByBoardId(boardId);
    }

    @PostMapping("/{boardId}/post")
    public ResponseEntity<String> createPost(@PathVariable int boardId) {
        return boardService.createPost(boardId);
    }

    @PutMapping("/{boardId}/post/{postId}")
    public ResponseEntity<String> updatePost(@PathVariable int boardId, @PathVariable int postId) {
        return null;
    }

    @DeleteMapping("/{boardId}/post/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable int boardId, @PathVariable int postId) {
        return null;
    }

    @GetMapping("/{boardId}/post/{postId}")
    public ResponseEntity<String> getPostByBoardIdAndPostId(@PathVariable int boardId, @PathVariable int postId) {
        return boardService.getPostByBoardIdAndPostId(boardId, postId);
    }

    @GetMapping("/{boardId}/post/{postId}/comment")
    public ResponseEntity<String> getComments(@PathVariable int boardId, @PathVariable int postId) {
        return null;
    }

    @PostMapping("/{boardId}/post/{postId}/comment")
    public ResponseEntity<String> createComment(@PathVariable int boardId, @PathVariable int postId) {
        return null;
    }

    @PutMapping("/{boardId}/post/{postId}/comment/{commentId}")
    public ResponseEntity<String> updateComment(@PathVariable int boardId, @PathVariable int postId, @PathVariable int commentId) {
        return null;
    }

    @DeleteMapping("/{boardId}/post/{postId}/comment/{commentId}")
    public ResponseEntity<String> deleteComment(@PathVariable int boardId, @PathVariable int postId, @PathVariable int commentId) {
        return null;
    }

}
