import React, { FC } from "react";
import { Password } from "../../modal/Password";
import { getPasswordStrength } from "../../util";
import { DeleteRounded, EditRounded } from "@mui/icons-material";

const getBorderColor = (password: Password) => {
    const passwordStrength = getPasswordStrength(password.password);
    switch (passwordStrength) {
        case 1:
            return "border-l-red";
        case 2:
            return "border-l-red";
        case 3:
            return "border-l-orange";
        case 4:
            return "border-l-green";
        case 5:
            return "border-l-indigo-500";
        case 6:
            return "border-l-purple";
    }
};

const PasswordItem: FC<{
    password: Password;
    onEdit: (password: Password) => void;
    onDelete: (password: Password) => void;
    onView: (password: Password) => void;
}> = ({ password, onEdit, onDelete, onView }) => {
    return (
        <div
            className={`border-l-4 ${getBorderColor(
                password
            )} rounded-r-xl p-3 w-full flex bg-whiteSecondary dark:bg-blackSecondary items-center gap-5`}
        >
            <div className={"min-w-[50px] rounded-full bg-whitePrimary dark:bg-blackPrimary h-[50px]"}>
                <img
                    src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${password.service}&size=128`}
                    className={"min-w-[50px] h-[50px] rounded-full"}
                    alt={""}
                />
            </div>
            <button
                onClick={() => onView(password)}
                className={
                    "flex-grow flex flex-col gap-3 justify-between text-lightThemeBlack dark:text-darkThemeWhite text-left"
                }
            >
                <div className={"text-blue"}>{password.getServiceName()}</div>
                <div className={"flex flex-col md:flex-row gap-2 items-start md:items-center"}>
                    <div>{password.login}</div>
                    <div className={"min-w-[5px] min-h-[5px] bg-lightThemeBlack hidden md:block"} />
                    <div>Updated on {password.getDate()}</div>
                </div>
            </button>
            <div
                className={
                    "min-w-[60px] flex flex-col justify-between gap-3 text-lightThemeBlack dark:text-darkThemeWhite"
                }
            >
                <button onClick={() => onEdit(password)}>
                    <EditRounded />
                </button>
                <button onClick={() => onDelete(password)}>
                    <DeleteRounded />
                </button>
            </div>
        </div>
    );
};

export default PasswordItem;
