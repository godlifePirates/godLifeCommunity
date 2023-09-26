import BoardCard from './BoardCard';
import React, { useState, useEffect } from 'react';
import board from '../../apis/board.js'

function BoardList() {

    const [boardListData, setBoardListData] = useState([]);

    const getBoardList = async() => {
        board.getBoardList().then((response) => {
            console.log(response.data)
            setBoardListData()
        })
    }

	useEffect(() => {
		getBoardList();
	}, []);

    return (
        <div>
            {
                boardListData.map(function (board, idx) {
                    return (
                        <BoardCard obj={board} key={idx} cnt = {idx + 1}></BoardCard>
                    )
                })
            }
        </div>
    );
}

export default BoardList;