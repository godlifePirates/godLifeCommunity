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
public class BoardUserAuthDTO {
    private int boardSeq;
    private int userSeq;
    private int authCd;
    private int createId;
    private LocalDateTime createDate;
    private int updateId;
    private LocalDateTime updateDate;
    private LocalDateTime expirationDate;
}
