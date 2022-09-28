import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreStateType } from "../../store/store";
import { getPasswordStrength } from "../../util";

const calculateAvgStrength = (strengths: {
    veryWeak: number;
    weak: number;
    fair: number;
    veryGood: number;
    excellent: number;
}) => {
    console.log(strengths);
    const total = Object.values(strengths).reduce((a, b) => a + b, 0);
    if (total === 0) return 0;
    return (
        ((strengths.veryWeak +
            strengths.weak * 2 +
            strengths.fair * 3 +
            strengths.veryGood * 4 +
            strengths.excellent * 5) /
            (total * 5)) *
        100
    ).toFixed(2);
};

const Stats: FC = () => {
    const passwords = useSelector((state: StoreStateType) => state.app.passwords);
    const [strength, setStrength] = React.useState({
        veryWeak: 0,
        weak: 0,
        fair: 0,
        veryGood: 0,
        excellent: 0,
    });

    React.useEffect(() => {
        let veryWeak = 0,
            weak = 0,
            fair = 0,
            veryGood = 0,
            excellent = 0;
        passwords.forEach((p) => {
            const passwordStrength = getPasswordStrength(p.password);
            console.log(passwordStrength);
            switch (passwordStrength) {
                case 1:
                    veryWeak++;
                    break;
                case 2:
                    veryWeak++;
                    break;
                case 3:
                    weak++;
                    break;
                case 4:
                    fair++;
                    break;
                case 5:
                    veryGood++;
                    break;
                case 6:
                    excellent++;
                    break;
            }
        });
        setStrength({ veryWeak, weak, fair, veryGood, excellent });
    }, [passwords]);

    return (
        <div
            className={
                "w-full bg-whiteSecondary dark:bg-blackSecondary md:h-[350px] grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-3 items-center py-6 px-5 text-lightThemeBlack dark:text-darkThemeWhite"
            }
        >
            <div className={"flex flex-col gap-1 md:gap-10 mx-auto md:items-center order-2 md:order-1 row-span-1"}>
                <div className={"text-4xl md:text-5xl font-extrabold"}>{passwords.length}</div>
                <div className={"text-xl md:text-2xl font-bold"}>Passwords</div>
            </div>
            <div className={"flex flex-col gap-1 md:gap-10 items-center order-1 md:order-2 row-span-2 col-span-1"}>
                <div className={"text-5xl md:text-6xl font-extrabold text-purple"}>
                    {calculateAvgStrength(strength)}%
                </div>
                <div className={"text-xl md:text-3xl font-bold text-blue"}>Average Strength</div>
            </div>
            <div className={"flex flex-col gap-3 order-3 md:order-3 row-span-1 mx-auto"}>
                <div className={"flex gap-3 items-center"}>
                    <div className={"rounded-lg w-[20px] h-[20px] bg-red"} />
                    <div>{strength.veryWeak} Very weak</div>
                </div>
                <div className={"flex gap-3 items-center"}>
                    <div className={"rounded-lg w-[20px] h-[20px] bg-orange"} />
                    <div>{strength.weak} Weak</div>
                </div>
                <div className={"flex gap-3 items-center"}>
                    <div className={"rounded-lg w-[20px] h-[20px] bg-green"} />
                    <div>{strength.fair} Fair</div>
                </div>
                <div className={"flex gap-3 items-center"}>
                    <div className={"rounded-lg w-[20px] h-[20px] bg-blue"} />
                    <div>{strength.veryGood} Very good</div>
                </div>
                <div className={"flex gap-3 items-center"}>
                    <div className={"rounded-lg w-[20px] h-[20px] bg-purple"} />
                    <div>{strength.excellent} Excellent</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
