import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../modules/user/Home";
import Login from "../modules/user/auth/Login";
import Register from "../modules/user/auth/Register";
import VerifyEmail from "../modules/user/auth/VerifyEmail";
import Test from "../modules/user/auth/test";
function AppRoutesUser() {
    return (
        <Routes>
            {/* Route cha: UserLayout */}
            <Route path="/" element={<UserLayout />}>
                {/* Route con: Các trang */}
                <Route index element={<Home />} /> {/* Trang Home */}
                <Route path="test" element={<Test />}/> {/* Trang Home */}
                <Route path="login" element={<Login />} /> {/* Trang Login */}
                <Route path="register" element={<Register />} /> {/* Trang Register */}
                <Route path="VerifyEmail" element={<VerifyEmail />} /> {/* Trang VerifyEmail */}
            </Route>
        </Routes>
    );
}

export default AppRoutesUser;