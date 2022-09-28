import React, { FC, useCallback } from "react";
import { KeyboardArrowDown, MenuRounded } from "@mui/icons-material";
import Dropdown from "./Dropdown";
import DarkModeToggler from "./DarkModeToggler";
import GeneratePasswordOverlay from "./GeneratePasswordOverlay";

const Navbar: FC = () => {
    const [dropdown, setDropdown] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const [generatePasswordOverlay, setGeneratePasswordOverlay] = React.useState(false);

    const toggleDropdown = useCallback(() => setDropdown((prev) => !prev), []);
    const closeDropdown = useCallback(() => setDropdown(false), []);
    const toggleExpanded = useCallback(() => setExpanded((prev) => !prev), []);
    const toggleGeneratePasswordOverlay = useCallback(() => setGeneratePasswordOverlay((prev) => !prev), []);

    return (
        <div
            className={`${
                !expanded ? "h-[80px]" : "h-[250px]"
            } bg-whitePrimary dark:bg-blackPrimary w-full py-6 px-5 flex flex-col md:flex-row justify-between gap-10 items-end rounded-b-2xl transition-all ease-out duration-500`}
        >
            <GeneratePasswordOverlay onClose={toggleGeneratePasswordOverlay} open={generatePasswordOverlay} />
            <div className={"flex items-center justify-between w-full md:w-fit"}>
                <div className={"text-purple text-2xl font-bold"}>Password Manager</div>
                <button className={"md:hidden text-lightThemeBlack dark:text-[#939191]"} onClick={toggleExpanded}>
                    <MenuRounded />
                </button>
            </div>
            <div
                className={
                    "md:gap-10 gap-3 items-end text-lg font-medium text-lightThemeBlack dark:text-[#939191] flex flex-col md:flex-row"
                }
            >
                <DarkModeToggler />
                <a
                    href={"https://github.com/rajdip-b/password-manager"}
                    className={"hover:text-purple transition-all ease-out duration-300"}
                >
                    Give a star
                </a>
                <button
                    className={"hover:text-purple transition-all ease-out duration-300"}
                    onClick={toggleGeneratePasswordOverlay}
                >
                    Generate password
                </button>
                <button
                    onClick={toggleDropdown}
                    className={"flex items-center gap-2 hover:text-purple transition-all ease-out duration-300"}
                >
                    <div>More</div>
                    <div className={`${dropdown ? "rotate-180" : ""} transition-all ease-out-duration-300`}>
                        <KeyboardArrowDown />
                    </div>
                </button>
                <Dropdown expanded={expanded} in={dropdown} onBlur={closeDropdown} />
            </div>
        </div>
    );
};

export default Navbar;
