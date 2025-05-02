import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function UserLayout({ children }) {
    return (
        <>
        < Header />
            <main className="main-content">
                {children}
            </main>
        < Footer />
        </>
    );
}
export default UserLayout;