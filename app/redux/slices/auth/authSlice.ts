import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/app/types/types";

const initialState = {
    user: {} as UserType,
    isAuth: false,
}

export const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {}
})

export const { } = authSlice.actions;

export default authSlice.reducer;