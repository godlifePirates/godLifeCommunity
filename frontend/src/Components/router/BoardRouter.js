import { Routes, Route } from "react-router-dom";

import BoardList from "../board/BoardList"
import BoardDetail from "../board/BoardDetail"


function BoardRouter() {
	return (
		<Routes>
			<Route path="/" element={<BoardList />}></Route>
			<Route path="/:boardId/" element={<BoardDetail />}></Route>
		</Routes>
	);
}

export default BoardRouter;