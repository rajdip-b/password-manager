import React, { FC } from "react";

const Input: FC<{
    value: string;
    name?: string;
    type?: string;
    onChange: (e: HTMLInputElement) => void;
    placeholder?: string;
    header?: string;
    description?: string;
}> = (props) => {
    return (
        <div className={"flex flex-col gap-1"}>
            <label className={"text-lg font-semibold text-blackSecondary dark:text-whiteSecondary"}>
                {props.header}
            </label>
            <label className={"text-sm font-normal text-lightThemeBlack dark:text-darkThemeWhite"}>
                {props.description}
            </label>
            <input
                type={props.type || "text"}
                className={
                    "text-lightThemeBlack dark:text-darkThemeWhite px-4 py-2 rounded-lg w-full outline-none border-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue focus:border-blue bg-whiteSecondary dark:bg-blackSecondary transition-all ease-out-duration-300"
                }
                value={props.value}
                onChange={(e) => props.onChange(e.target)}
                placeholder={props.placeholder}
                name={props.name}
            />
        </div>
    );
};

export default Input;
