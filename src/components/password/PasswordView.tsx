import React, { FC, useCallback } from "react";
import PasswordItem from "./PasswordItem";
import { Password } from "../../modal/Password";
import ActionButton from "../ui/ActionButton";
import AddPasswordOverlay from "./AddPasswordOverlay";
import { useSelector } from "react-redux";
import { StoreStateType } from "../../store/store";
import EditPasswordOverlay from "./EditPasswordOverlay";
import DeletePasswordOverlay from "./DeletePasswordOverlay";

const PasswordView: FC = () => {
    const [addPasswordOverlayOpen, setAddPasswordOverlayOpen] = React.useState(false);
    const [editPassword, setEditPassword] = React.useState<Password | null>(null);
    const [deletePassword, setDeletePassword] = React.useState<Password | null>(null);
    const passwords = useSelector((state: StoreStateType) => state.app.passwords);

    const toggleAddPasswordOverlay = useCallback(() => setAddPasswordOverlayOpen((prev) => !prev), []);

    return (
        <div className={"w-full p-5 bg-whitePrimary dark:bg-blackPrimary h-fit rounded-t-2xl"}>
            <AddPasswordOverlay onClose={toggleAddPasswordOverlay} open={addPasswordOverlayOpen} />
            <EditPasswordOverlay
                onClose={() => setEditPassword(null)}
                open={editPassword != null}
                password={editPassword}
            />
            <DeletePasswordOverlay
                onClose={() => setDeletePassword(null)}
                open={deletePassword != null}
                password={deletePassword}
            />
            <div className={"font-extrabold text-2xl text-blackSecondary dark:text-whiteSecondary mb-5"}>
                Your passwords
            </div>
            <div className={" grid lg:grid-cols-2 gap-5"}>
                {passwords
                    .map((p) => Password.fromJSON(p))
                    .map((p) => (
                        <PasswordItem key={p.id} password={p} onEdit={setEditPassword} onDelete={setDeletePassword} />
                    ))}
                {passwords.length === 0 && (
                    <div
                        className={
                            "text-lightThemeBlack dark:text-darkThemeWhite text-center text-xl font-light col-span-2"
                        }
                    >
                        You don't have any passwords yet.
                    </div>
                )}
            </div>
            <ActionButton onClick={toggleAddPasswordOverlay} />
        </div>
    );
};

export default PasswordView;
