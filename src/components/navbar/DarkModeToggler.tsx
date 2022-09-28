import React, { FC } from "react";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateType } from "../../store/store";
import { appActions } from "../../store/app-slice";

const DarkModeToggler: FC = () => {
    const isDarkMode = useSelector((state: StoreStateType) => state.app.isDarkMode);
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(appActions.toggleDarkMode())}
            className={"h-[25px] w-[50px] rounded-full bg-purple"}
        >
            <div
                className={`w-[25px] h-[25px] items-center justify-center flex text-white rounded-full transition-all ease-out duration-500 ${
                    isDarkMode && "ml-[25px]"
                }`}
            >
                {isDarkMode ? <DarkModeRounded fontSize={"small"} /> : <LightModeRounded fontSize={"small"} />}
            </div>
        </button>
    );
};

export default DarkModeToggler;
