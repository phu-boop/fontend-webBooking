import React, { Children } from 'react';

const Button = ({ Children, onClick, classname, type="button"}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`p-4 text-white bg-[var(--blue-btn)] h-3.6 pt-1 pb-1 pr-3 pl-3 ${classname}`}
        >
            {Children}
        </button>
    )
}

export default Button;