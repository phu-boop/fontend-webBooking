import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Sử dụng useNavigate
import Button from "./Button";
import GbImage from "../assets/images/Gb@3x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faEarthAmericas, faCarRear, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faHospital, faPaperPlane, faHandPeace } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
    const navigate = useNavigate(); // Khởi tạo useNavigate
    const location = useLocation(); // Lấy thông tin đường dẫn hiện tại
    const isLoginRegisterPage = location.pathname === "/login" || location.pathname === "/register"; // Kiểm tra xem có phải trang đăng nhập hoặc đăng ký không

    return (
        <header className="bg-[var(--primary-color)] pt-2 text-white">
            <div className="container-main">
                <nav className="flex justify-between items-center h-15 pt-1 pr-4 pb-2 pl-4">
                    <div className="text-2xl font-bold">
                        <h1><Link to="/" >Booking.com</Link></h1>
                    </div>
                    <ul className="flex gap-2 items-center">
                        {!isLoginRegisterPage && (
                            <li className="h-full px-3 py-2">
                                <Link to="/Test">USD</Link>
                            </li>
                        )}
                        <li className="h-full px-3 py-2">
                            <Link to="/admin">
                                <img className="h-6 rounded-full" src={GbImage} alt="mỹ" />
                            </Link>
                        </li>
                        <li className="h-full px-3 py-2">
                            <Link
                                to="/admin"
                                className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
                            >
                                <FontAwesomeIcon icon={faQuestion} className="text-sm" />
                            </Link>
                        </li>
                        {!isLoginRegisterPage && (
                            <>
                                <li className="h-full px-3 py-2 font-bold">
                                    <Link to="/admin">List your property</Link>
                                </li>
                                <li className="h-full">
                                    <Button
                                        Children={"Register"}
                                        classname={"text-[var(--blue-btn)] bg-white hover:bg-gray-200 h-9 text-sm font-bold"}
                                        onClick={() => navigate("/login")} // Sử dụng useNavigate
                                    />
                                </li>
                                <li className="h-full">
                                    <Button
                                        Children={"Sign in"}
                                        classname={"text-[var(--blue-btn)] bg-white hover:bg-gray-200 h-9 font-bold"}
                                        onClick={() => navigate("/login")} // Sử dụng useNavigate
                                    />
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                {!isLoginRegisterPage && (
                <div className="pb-3">
                    <ul className="flex justify-start items-center">
                        <li>
                            <Link to="/admin" className="inline-flex items-center gap-2 px-4 py-3 rounded-3xl hover:bg-[#1a4fa0]">
                                <span>
                                    <FontAwesomeIcon icon={faHospital} />
                                </span>
                                <span>Stays</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin" className="inline-flex items-center gap-2 px-4 py-3 rounded-3xl hover:bg-[#1a4fa0]">
                                <span>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </span>
                                <span>Flights</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin" className="inline-flex items-center gap-2 px-4 py-3 rounded-3xl hover:bg-[#1a4fa0]">
                                <span>
                                    <FontAwesomeIcon icon={faEarthAmericas} />
                                </span>
                                <span>Flight + Hotel</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin" className="inline-flex items-center gap-2 px-4 py-3 rounded-3xl hover:bg-[#1a4fa0]">
                                <span>
                                    <FontAwesomeIcon icon={faCarRear} />
                                </span>
                                <span>Car rentals</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin" className="inline-flex items-center gap-2 px-4 py-3 rounded-3xl hover:bg-[#1a4fa0]">
                                <span>
                                    <FontAwesomeIcon icon={faSnowflake} />
                                </span>
                                <span>Attractions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin" className="inline-flex items-center gap-2 px-4 py-3 rounded-3xl hover:bg-[#1a4fa0]">
                                <span>
                                    <FontAwesomeIcon icon={faHandPeace} />
                                </span>
                                <span>Airport taxis</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                )}
            </div>
        </header>
    );
};

export default Header;