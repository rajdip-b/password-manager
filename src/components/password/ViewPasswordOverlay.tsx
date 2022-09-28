import React, { FC } from "react";
import { Password } from "../../modal/Password";
import Overlay from "../common/Overlay";
import { CloseRounded, KeyRounded, PersonRounded } from "@mui/icons-material";
import Button from "../ui/Button";

const ViewPasswordOverlay: FC<{ password: Password | null; onClose: () => void; open: boolean }> = ({
    password,
    onClose,
    open,
}) => {
    return (
        <Overlay className={"flex flex-col gap-5 text-blackSecondary dark:text-whiteSecondary"} open={open}>
            <div className={"flex justify-between gap-5 items-center mb-5"}>
                <div className={"text-2xl font-bold"}>
                    <span className={"text-blue"}>{password?.service}</span> ({password?.login})
                </div>
                <button onClick={onClose}>
                    <CloseRounded />
                </button>
            </div>
            <div className={"flex gap-1 items-center"}>
                <PersonRounded />
                <span className={"ml-2"}>{password?.login}</span>
            </div>
            <div className={"flex gap-1 items-center"}>
                <KeyRounded />
                <span className={"ml-2"}>{password?.password}</span>
            </div>
            <Button className={"text-white bg-green border-green md:w-[150px] w-full"} onClick={onClose}>
                Close
            </Button>
        </Overlay>
    );
};

export default ViewPasswordOverlay;
