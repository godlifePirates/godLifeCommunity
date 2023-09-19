package com.glp.community.data.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BoardNonrecommendDTO {
    private int boardSeq;
    private int postSeq;
    private int replySeq;
    private int createId;
    private LocalDateTime createDate;
    private String createIp;
}
