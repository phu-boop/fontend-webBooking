import React, { Children } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import GbImage from "../assets/images/Gb@3x.png";
const Header = () => {
    return (
        <header className="bg-[var(--primary-color)]  pt-2 text-white ">
            <div className="container-main">
                <nav className="flex justify-between items-center pt-1 pr-4 pb-2 pl-4">
                    <div className="text-2xl font-bold">
                        <h1>Booking.com</h1>
                    </div>
                    <ul className="flex">
                        <li>
                            <Link to="/admin">USD</Link>
                        </li>
                        <li> 
                            <Link to="/admin">
                                <img src={GbImage} alt="mỹ" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin">Home</Link>
                        </li>
                        <li>
                            <Link to="/admin">Home</Link>
                        </li>
                        <li>
                            <Button Children={'Register'} ></Button>
                        </li>
                        <li>
                            <Button Children={'Login'} ></Button>
                        </li>
                    </ul>
                </nav>
                <div>
                    <ul>
                        <li>
                            <Link to="/admin">
                                <span>hi</span>
                                <span>Stays</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;