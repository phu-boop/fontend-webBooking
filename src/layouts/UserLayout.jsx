import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserLayout = () => {
    return (
        <div>
            <Header /> {/* Header xuất hiện trên tất cả các trang */}
            <main>
                <Outlet /> {/* Nội dung của từng trang sẽ được hiển thị ở đây */}
            </main>
            <Footer /> {/* Footer xuất hiện trên tất cả các trang */}
        </div>
    );
};

export default UserLayout;