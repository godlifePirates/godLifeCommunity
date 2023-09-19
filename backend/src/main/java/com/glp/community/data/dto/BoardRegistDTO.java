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
public class BoardRegistDTO {
    private int seq;
    private String boardName;
    private int applicantUserSeq;
    private int aprvUserSeq;
    private int createId;
    private LocalDateTime createDate;
    private int updateId;
    private LocalDateTime updateDate;
}
