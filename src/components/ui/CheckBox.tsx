import { Done } from "@mui/icons-material";
import { FC, useCallback, useEffect, useState } from "react";

const CheckBox: FC<{
    className?: string;
    text: string;
    id: number;
    onClick: (checked: boolean, id: number) => void;
}> = (props) => {
    const [selected, setSelected] = useState(false);

    const handleClick = useCallback(() => {
        setSelected((prev) => !prev);
    }, [selected]);

    useEffect(() => {
        props.onClick(selected, props.id);
    }, [selected]);

    return (
        <button onClick={handleClick} className={`${props.className} outline-none flex flex-row gap-5 items-center`}>
            <div
                className={`${
                    selected ? "text-slate-100 bg-purple" : "bg-transparent text-transparent"
                } rounded-lg border-2 border-purple h-[30px] w-[30px] transition-all ease-out duration-300`}
            >
                <Done className={`${selected ? "opacity-100" : "opacity-0"}`} />
            </div>
            <h1>{props.text}</h1>
        </button>
    );
};

export default CheckBox;
