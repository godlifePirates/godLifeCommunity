package com.glp.community.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BoardTagDTO {
    private String tag;
    private int boardSeq;
    private int categorySeq;
    private int postSeq;
    private int replySeq;
}
