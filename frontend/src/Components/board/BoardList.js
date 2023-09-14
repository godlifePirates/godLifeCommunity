import BoardCard from './BoardCard';
import React, { useState } from 'react';

function BoardList() {

    const [listData, setListData] = useState(
        [
            {
                "boardTitle": "기본",
                "follower": 5,
                "postList": [
                    { 
                        "postTitle" : "글 1", 
                        "postContents" : "내용 1"
                    },
                    { 
                        "postTitle" : "글 2", 
                        "postContents" : "내용 2"
                    },
                    { 
                        "postTitle" : "글 3", 
                        "postContents" : "내용 3"
                    },
                ]
            }
        ]
    );

    return (
        <div>
            {
                listData.map(function (board, idx) {
                    return (
                        <BoardCard obj={board} key={idx} cnt = {idx + 1}></BoardCard>
                    )
                })
            }
        </div>
    );
}

export default BoardList;