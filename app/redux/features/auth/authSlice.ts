import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/app/types/types";

type InitialState = {
    user: UserType
    isAuth: boolean
}

const initialState = {
    user: {} as UserType,
    isAuth: false,
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<InitialState>) => {
            state.user = action.payload.user;
            state.isAuth = action.payload.isAuth;
        },
    }
})

export const { login } = auth.actions;

export default auth.reducer;