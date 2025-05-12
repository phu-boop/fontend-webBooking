import React, { Children } from 'react';
import { Navigate } from "react-router-dom";

const Button = ({ Children, onClick, classname, type="button"}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`p-4 rounded-sm cursor-pointer bg-[var(--blue-btn)] h-3.6 pt-1 pb-1 pr-3 pl-3 hover:bg-blue-700 transition-colors ${classname}`}
        >
            {Children}
        </button>
    )
}

export default Button;