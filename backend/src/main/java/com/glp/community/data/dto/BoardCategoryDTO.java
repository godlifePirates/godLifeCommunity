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
public class BoardCategoryDTO {
    private int boardSeq;
    private int seq;
    private String name;
    private String icon;
    private int writeAuthCd;
    private int readAuthCd;
    private int delAuthCd;
    private String notiContents;
    private int state;
    private int pointCost;
    private int createId;
    private LocalDateTime createDate;
    private int updateId;
    private int updateDate;
}
