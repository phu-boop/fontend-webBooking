import React from "react";
import FacebookLoginButton from "./FacebookLoginButton"; // Import component FacebookLoginButton
import { useState } from "react";
import { login } from "../../../api/auth";  
import Button from "../../../components/Button"; // Import component Button
import Alert from "../../../components/Alert";
import { useNavigate } from "react-router-dom"; // Imp
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [alert, setAlert] = useState(null);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setAlert({
                type: "error",
                message: "Please enter your email address.",
            });
            return;
        } else if (!emailRegex.test(email)) {
            setAlert({
                type: "error",
                message: "Please check if the email address you've entered is correct.",
            });
            return;
        }
        // Gọi API đăng nhập
        try {
            const res = await login(email);
            if (res && res.errCode === 0) {
                navigate("/VerifyEmail?email="+email);
            }
        }catch (error) {
            console.error("Error during login:", error);
            setAlert({
                type: "error",
                message: "An error occurred during login. Please try again.",
            });
        }
    };
    return (
        <div className="login-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="login-box bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Sign in or create an account</h1>
                <p className="text-gray-600 mb-6">
                    You can sign in using your Booking.com account to access our services.
                </p>
                <form className="login-form">
                    <div className="form-group mb-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    {
                        alert && (
                            <Alert
                                type={alert.type}
                                message={alert.message}
                                onClose={() => setAlert(null)}
                            />
                        )
                    }
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        Children="Continue with email"
                        classname={"h-12 mt-2 w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"}
                    />
                </form>
                <div className="divider my-6 flex items-center">
                    <span className="flex-grow border-t border-gray-300"></span>
                    <span className="mx-4 text-gray-500">or use one of these options</span>
                    <span className="flex-grow border-t border-gray-300"></span>
                </div>
                <div className="social-login flex justify-center gap-4 pb-1">
                    {/* Sử dụng component FacebookLoginButton */}
                    <FacebookLoginButton />
                </div>
                <p className="text-sm text-gray-500 mt-6 text-center border-t border-gray-200 pt-4">
                    By signing in or creating an account, you agree with our{" "}
                    <a href="#" className="text-blue-600 hover:underline">Terms & conditions</a> and{" "}
                    <a href="#" className="text-blue-600 hover:underline">Privacy statement</a>.
                </p>
                <p className="text-xs text-gray-400 mt-4 text-center">
                    All rights reserved. Copyright (2006 - 2025) - Booking.com™
                </p>
            </div>
        </div>
    );
}

export default Login;