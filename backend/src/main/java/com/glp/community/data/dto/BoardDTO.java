package com.glp.community.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BoardDTO {
    private int seq;
    private String name;
    private String icon;
    private String type;
    private String contents;
    private int managerUserSeq;
    private int writeAuthCd;
    private int readAuthCd;
    private int delAuthCd;
    private int state;
    private int recommendCut;
    private int hideReportCnt;
    private int follow;
}
