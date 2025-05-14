import React, { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { verify } from "../../../api/auth";
function VerifyEmail() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef([]);
  const [button, setButton] = useState(false);
  const [countdown, setCountdown] = useState(60);
  useEffect(() => {
    // Chỉ tạo interval nếu countdown > 0
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      // Hàm cleanup để xóa interval khi component unmount hoặc countdown thay đổi
      return () => clearInterval(interval);
    }
  }, [countdown]);
  // Tự động focus ô tương ứng khi activeInput thay đổi
  useEffect(() => {
    inputRefs.current[activeInput]?.focus();
  }, [activeInput]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // Chỉ cho phép số hoặc rỗng
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index == 5) {
      setButton(true);
    }else{
      button && setButton(false);
    }
    if (value && index < 5) {
      setActiveInput(index + 1);
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      setActiveInput(index - 1);
    }
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const handleVerify = async () => {
    alert("Mã OTP: " + code.join(""));
    // Gọi API verify ở đây
    try {
      const otp = code.join("");
      console.log("email", email);
      console.log("otp", otp);
      const res = await verify(email , otp );
      console.log("res", res);
      if (res && res.errCode === 0) {
        alert("Xác thực thành công");
        // Chuyển hướng đến trang khác nếu cần
      } else {
        alert("Xác thực thất bại");
      }
    } catch (error) {
      console.error("Error during verify:", error);
      alert("An error occurred during verify. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold mb-2">Verify your email address</h2>
        <p className="mb-6">
          We’ve sent a verification code to{" "}
          <strong>{email}</strong>.<br />
          Please enter this code to continue.
        </p>

        <div className="flex justify-between gap-2 mb-6">
          {code.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              className="w-15 h-15 text-xl text-center border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out hover:border-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"              value={digit}
              ref={(el) => (inputRefs.current[idx] = el)} // Lưu ref
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            />
          ))}
        </div>
        <button
          className={
            button ? 
            "w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition-colors duration-200 ease-in-out cursor-pointer" 
            :
            "w-full py-2 bg-gray-300 text-white font-semibold rounded cursor-not-allowed " }
          onClick={handleVerify}
        >
          Verify email
        </button>

        <p className="text-sm text-gray-600 mt-4">
          Didn’t receive an email? Please check your spam folder or request
          another code in {countdown} seconds
        </p>

        <div className="mt-4">
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Back to sign in
          </a>
        </div>

        <div className="text-xs text-gray-500 mt-8 text-center">
          By signing in or creating an account, you agree with our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms & conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy statement
          </a>
          .
          <br />
          <span className="block mt-2">© 2006 – 2025 Booking.com™</span>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;