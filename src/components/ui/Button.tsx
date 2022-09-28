import React, { FC, ReactNode } from "react";

const Button: FC<{ onClick?: () => void; children?: ReactNode; className?: string; disabled?: boolean }> = (props) => {
    return (
        <button onClick={props.onClick} className={`rounded-lg px-4 py-2 border-2 text-lg ${props.className}`}>
            {props.children}
        </button>
    );
};

export default Button;
