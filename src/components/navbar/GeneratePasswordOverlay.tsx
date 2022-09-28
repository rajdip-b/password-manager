import React, { FC, useState } from "react";
import Overlay from "../common/Overlay";
import Button from "../ui/Button";
import Input from "../ui/Input";
import CheckBox from "../ui/CheckBox";
import { CloseRounded } from "@mui/icons-material";

const generatePassword = (length: number, charset: string) => {
    let result = "";
    let charactersLength = charset.length;
    for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

const GeneratePasswordOverlay: FC<{ onClose: () => void; open: boolean }> = (props) => {
    const [length, setLength] = useState("");
    const [charset, setCharset] = useState("");
    const [password, setPassword] = useState("");

    const updateSelectedOptions = (selected: boolean, id: number) => {
        if (id === 0 && selected) setCharset((prev) => prev.concat("abcdefghijklmnopqrstuvwxyz"));
        if (id === 1 && selected) setCharset((prev) => prev.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
        if (id === 2 && selected) setCharset((prev) => prev.concat("1234567890"));
        if (id === 3 && selected) setCharset((prev) => prev.concat("!@#$%^&*."));
        if (id === 0 && !selected) setCharset((prev) => prev.replace("abcdefghijklmnopqrstuvwxyz", ""));
        if (id === 1 && !selected) setCharset((prev) => prev.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", ""));
        if (id === 2 && !selected) setCharset((prev) => prev.replace("1234567890", ""));
        if (id === 3 && !selected) setCharset((prev) => prev.replace("!@#$%^&*.", ""));
    };

    const onGenerateClicked = () => {
        setPassword(generatePassword(+length, charset));
    };

    return (
        <Overlay open={props.open} className="flex flex-col gap-5 text-blackSecondary dark:text-whiteSecondary">
            <div className={"flex justify-between gap-5 items-center mb-5"}>
                <div className={"text-2xl font-bold"}>Generate a strong password</div>
                <button onClick={props.onClose}>
                    <CloseRounded />
                </button>
            </div>
            <CheckBox text="Add lower alphabets" onClick={(e, v) => updateSelectedOptions(e, v)} id={0} />
            <CheckBox text="Add upper alphabets" onClick={(e, v) => updateSelectedOptions(e, v)} id={1} />
            <CheckBox text="Add numbers" onClick={(e, v) => updateSelectedOptions(e, v)} id={2} />
            <CheckBox text="Add special chars(!@#$%^&*.)" onClick={(e, v) => updateSelectedOptions(e, v)} id={3} />
            <Input
                header={"Length"}
                description={"Length of the password"}
                value={length}
                placeholder="20"
                type={"number"}
                onChange={(e) => setLength(e.value)}
            />
            <div className="bg-whiteSecondary dark:bg-blackSecondary p-3 rounded-lg dark:text-darkThemeWhite text-lightThemeBlack">
                {password.length === 0 && "Click on generate"}
                {password.length !== 0 && password}
            </div>
            <div className={"flex gap-5"}>
                <Button onClick={props.onClose} className="text-blue border-blue md:w-[150px] w-full">
                    Close
                </Button>
                <Button onClick={onGenerateClicked} className={"bg-green border-green text-white md:w-[150px] w-full"}>
                    Generate
                </Button>
            </div>
        </Overlay>
    );
};

export default GeneratePasswordOverlay;
