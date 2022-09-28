import React, { FC } from "react";
import Overlay from "../common/Overlay";
import { CloseRounded } from "@mui/icons-material";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../store/app-slice";
import { StoreStateType } from "../../store/store";

const DeleteAllPasswordsOverlay: FC<{ onClose: () => void; open: boolean }> = (props) => {
    const passwords = useSelector((state: StoreStateType) => state.app.passwords);
    const dispatch = useDispatch();

    const handleDeleteAll = React.useCallback(() => {
        passwords.forEach((p) => dispatch(appActions.deletePassword(p.id)));
    }, [passwords]);

    return (
        <Overlay className={"flex flex-col gap-5 text-blackSecondary dark:text-whiteSecondary"} open={props.open}>
            <div className={"flex justify-between gap-5 items-center mb-5"}>
                <div className={"text-2xl font-bold"}>Delete password?</div>
                <button onClick={props.onClose}>
                    <CloseRounded />
                </button>
            </div>
            <div className={"text-lg"}>Are you sure you want to delete all the passwords? This can't be undone.</div>
            <div className={"flex gap-5"}>
                <Button className={"border-blue text-blue md:w-[150px] w-full"} onClick={props.onClose}>
                    No
                </Button>
                <Button className={"text-white bg-green border-green md:w-[150px] w-full"} onClick={handleDeleteAll}>
                    Yes
                </Button>
            </div>
        </Overlay>
    );
};

export default DeleteAllPasswordsOverlay;
