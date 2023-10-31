import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../app/Home"
import BoardRouter from "./BoardRouter";
import MemberRouter from "./MemberRouter";
import AdminRouter from "./AdminRouter";

function MainRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/board/*" element={<BoardRouter />} />
			<Route path="/member/*" element={<MemberRouter />} />
			<Route path="/admin/*" element={<AdminRouter />} />
		</Routes>
	);
}

export default MainRouter;