import React, { FC } from "react";
import { DeleteRounded, FileDownloadRounded, SaveRounded } from "@mui/icons-material";
import { Transition } from "react-transition-group";
import DeleteAllPasswordsOverlay from "./DeleteAllPasswordsOverlay";

const getClassNames = (state: string) => {
    switch (state) {
        case "entering":
            return "opacity-100 h-[160px]";
        case "entered":
            return "opacity-100 h-[160px]";
        case "exiting":
            return "opacity-0 h-[0px]";
        case "exited":
            return "opacity-0 h-[0px]";
        default:
            return "opacity-0";
    }
};

const Dropdown: FC<{ in: boolean; onBlur: () => void; expanded: boolean }> = (props) => {
    const [deleteAllOverlayOpen, setDeleteAllOverlayOpen] = React.useState(false);

    const toggleDeleteAllOverlay = () => setDeleteAllOverlayOpen((prev) => !prev);

    return (
        <Transition in={props.in} timeout={500} mountOnEnter unmountOnExit>
            {(state) => (
                <button
                    onBlur={props.onBlur}
                    autoFocus={true}
                    className={`overflow-hidden bg-whitePrimary dark:bg-blackPrimary dark:bg- w-[300px] rounded-xl text-lightThemeBlack dark:text-darkThemeWhite absolute  ${
                        !props.expanded ? "top-[90px] right-[10vw]" : "top-[250px] right-5"
                    } ${getClassNames(state)} transition-all ease-out duration-500`}
                >
                    <DeleteAllPasswordsOverlay
                        onClose={toggleDeleteAllOverlay}
                        open={deleteAllOverlayOpen}
                    />
                    <button
                        className={
                            "flex w-full gap-2 px-5 py-3 dark:hover:bg-blackSecondary hover:bg-whiteSecondary dark:hover:bg-blackPrimary items-center"
                        }
                    >
                        <SaveRounded />
                        Save locally
                    </button>
                    <button
                        onClick={toggleDeleteAllOverlay}
                        className={
                            "flex w-full gap-2 px-5 py-3 dark:hover:bg-blackSecondary hover:bg-whiteSecondary dark:hover:bg-blackPrimary items-center"
                        }
                    >
                        <DeleteRounded />
                        Delete All
                    </button>
                    <button
                        className={
                            "flex w-full gap-2 px-5 py-3 dark:hover:bg-blackSecondary hover:bg-whiteSecondary dark:hover:bg-blackPrimary items-center"
                        }
                    >
                        <FileDownloadRounded />
                        Import
                    </button>
                </button>
            )}
        </Transition>
    );
};

export default Dropdown;
