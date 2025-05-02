import { Routes, Route } from "react-router-dom"
import Home from "../modules/user/Home"; 
function AppRoutesUser() {
    return (
        <Routes>
        <Route path="/" element={<Home />} /> {/* Trang Home là mặc định */}
        </Routes>
    )
}
export default AppRoutesUser;