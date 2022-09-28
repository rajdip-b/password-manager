import React, { FC } from "react";
import { AddRounded } from "@mui/icons-material";

const ActionButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className={
                "rounded-full w-[50px] h-[50px] z-20 bg-blue text-white bottom-[20px] md:right-[10vw] fixed right-5 shadow-xl shadow-sky-800/20"
            }
        >
            <AddRounded />
        </button>
    );
};

export default ActionButton;
