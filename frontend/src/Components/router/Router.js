import { Routes, Route } from "react-router-dom";

import Home from "../app/Home"
import BoardList from "../board/BoardList"
import BoardDetail from "../board/BoardDetail"

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/board" element={<BoardList />}></Route>
			<Route path="/board/:boardId/" element={<BoardDetail />}></Route>
		</Routes>
	);
}

export default Router;