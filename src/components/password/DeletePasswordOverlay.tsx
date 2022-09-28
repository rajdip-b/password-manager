import React, { FC, useCallback } from "react";
import { Password } from "../../modal/Password";
import Overlay from "../common/Overlay";
import { CloseRounded } from "@mui/icons-material";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { appActions } from "../../store/app-slice";
import { toast } from "react-toastify";

const DeletePasswordOverlay: FC<{ onClose: () => void; open: boolean; password: Password | null }> = (props) => {
    const dispatch = useDispatch();

    const handleDeleteClick = useCallback(() => {
        dispatch(appActions.deletePassword(props.password!.id));
        toast.success("Password deleted");
        props.onClose();
    }, [props.password]);

    return (
        <Overlay className={"flex flex-col gap-5 text-blackSecondary dark:text-whiteSecondary"} open={props.open}>
            <div className={"flex justify-between gap-5 items-center mb-5"}>
                <div className={"text-2xl font-bold"}>Delete password?</div>
                <button onClick={props.onClose}>
                    <CloseRounded />
                </button>
            </div>
            <div className={"text-lg"}>
                Are you sure you want to delete <span className={"text-purple"}>{props.password?.service}</span> logged
                in as <span className={"text-blue"}>{props.password?.login}</span>? This can't be undone.
            </div>
            <div className={"flex gap-5"}>
                <Button className={"border-blue text-blue md:w-[150px] w-full"} onClick={props.onClose}>
                    No
                </Button>
                <Button className={"text-white bg-green border-green md:w-[150px] w-full"} onClick={handleDeleteClick}>
                    Yes
                </Button>
            </div>
        </Overlay>
    );
};

export default DeletePasswordOverlay;
