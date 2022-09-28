import Navbar from "./components/navbar/Navbar";
import Stats from "./components/stats/Stats";
import PasswordView from "./components/password/PasswordView";
import "reflect-metadata";
import { useSelector } from "react-redux";
import { StoreStateType } from "./store/store";

function App() {
    const isDarkMode = useSelector((state: StoreStateType) => state.app.isDarkMode);

    return (
        <div className={`${isDarkMode && "dark"}`}>
            <div
                className={`w-screen h-screen bg-whiteSecondary dark:bg-blackSecondary dark:bg-blackSecondary font-k2d`}
            >
                <div className={"flex flex-col justify-start items-center md:w-[80vw] h-screen mx-auto"}>
                    <Navbar />
                    <Stats />
                    <PasswordView />
                </div>
            </div>
        </div>
    );
}

export default App;
