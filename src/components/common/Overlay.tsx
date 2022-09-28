import React, { FC, ReactNode } from "react";
import { Transition } from "react-transition-group";
import { useSelector } from "react-redux";
import { StoreStateType } from "../../store/store";

const getOverlayTransitionClasses = (state: string) => {
    switch (state) {
        case "entering":
            return "bg-gray-800/70 backdrop-blur-sm";
        case "entered":
            return "bg-gray-800/70 backdrop-blur-sm";
        case "exiting":
            return "bg-gray-800/0 backdrop-blur-0";
        case "exited":
            return "bg-gray-800/0 backdrop-blur-0";
        default:
            return "";
    }
};

const getModalClasses = (state: string) => {
    switch (state) {
        case "entering":
            return "translate-y-[0%] opacity-100";
        case "entered":
            return "translate-y-[0%] opacity-100";
        case "exiting":
            return "translate-y-[100%] opacity-0";
        case "exited":
            return "translate-y-[100%] opacity-0";
        default:
            return "";
    }
};
const Overlay: FC<{ open: boolean; children: ReactNode; className?: string }> = ({ open, children, className }) => {
    const isDarkMode = useSelector((state: StoreStateType) => state.app.isDarkMode);

    return (
        <Transition in={open} mountOnEnter unmountOnExit timeout={500}>
            {(state: string) => (
                <div
                    className={`${
                        isDarkMode && "dark"
                    } absolute flex items-center justify-center z-30 top-0 left-0 ${getOverlayTransitionClasses(
                        state
                    )} transition-all ease-out duration-300 w-screen h-screen`}
                >
                    <div
                        className={`w-screen dark:bg-blackPrimary bg-whitePrimary overflow-y-scroll ${getModalClasses(
                            state
                        )} ${className} h-screen md:rounded-2xl w-screen h-screen md:h-fit md:w-[40vw] p-10 flex flex-col gap-5 transition-all ease-out duration-300 p-10 px-5 md:px-10`}
                    >
                        {children}
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default Overlay;
