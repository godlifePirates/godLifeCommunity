import { Routes, Route } from "react-router-dom";

import Join from "../member/Join"
import Login from "../member/Login"
import Logout from "../member/Logout"


function MemberRouter() {
    return (
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
        </Routes>
    );
}

export default MemberRouter;