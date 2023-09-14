import { Routes, Route } from "react-router-dom";

import Home from "../app/Home"
import BoardList from "../board/BoardList"
import BoardDetail from "../board/BoardDetail"
import Join from "../member/Join"
import Login from "../member/Login"
import Logout from "../member/Logout"


function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/board" element={<BoardList />}></Route>
			<Route path="/board/:boardId/" element={<BoardDetail />}></Route>
			<Route path="/" element={<Home />}></Route>

			<Route path="/login" element={<Login />}></Route>
			<Route path="/join" element={<Join />}></Route>
			<Route path="/logout" element={<Logout />}></Route>
		</Routes>
	);
}

export default Router;