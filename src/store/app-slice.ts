import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Password } from "../modal/Password";

interface AppSliceInitialState {
    isDarkMode: boolean;
    passwords: Password[];
}

const initialState: AppSliceInitialState = {
    isDarkMode: false,
    passwords: [],
};

const appSlice = createSlice({
    name: "password-manager-app",
    initialState,
    reducers: {
        toggleDarkMode(state: AppSliceInitialState) {
            state.isDarkMode = !state.isDarkMode;
        },
        savePassword(state: AppSliceInitialState, action) {
            state.passwords.push(action.payload);
        },
        updatePassword(state: AppSliceInitialState, action: PayloadAction<Password>) {
            const password = action.payload;
            const index = state.passwords.findIndex((p) => p.id === password.id);
            console.log(index);
            state.passwords[index] = password;
        },
        deletePassword(state: AppSliceInitialState, action: PayloadAction<string>) {
            const id = action.payload;
            state.passwords = state.passwords.filter((p) => p.id !== id);
        },
    },
});

const appActions = appSlice.actions;
const appReducer = appSlice.reducer;

export { appActions, appReducer };
export type { AppSliceInitialState };
