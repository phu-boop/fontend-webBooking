import React, { useState } from "react";

function VerifyEmail() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const [activeInput, setActiveInput] = useState(0);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // chỉ cho phép số
    const newCode = [...code];
    newCode[index] = value;
    console.log("index":index);
    console.log(activeInput);
    setCode(newCode);
    if (value && index < 5) {
      setActiveInput(index + 1);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      setActiveInput(index - 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold mb-2">Verify your email address</h2>
        <p className="mb-6">
          We’ve sent a verification code to{" "}
          <strong>phu25022005@gmail.com</strong>.<br />
          Please enter this code to continue.
        </p>

        <div className="flex justify-between gap-2 mb-6">
          {code.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-xl text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={digit}
              autoFocus={idx === activeInput}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            />
          ))}
        </div>

        <button
          className="w-full py-2 bg-gray-300 text-white font-semibold rounded cursor-not-allowed"
          disabled
        >
          Verify email
        </button>

        <p className="text-sm text-gray-600 mt-4">
          Didn’t receive an email? Please check your spam folder or request
          another code in 45 seconds
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
