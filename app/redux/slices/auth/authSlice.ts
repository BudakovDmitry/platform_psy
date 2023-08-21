import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/app/types/types";
import {AuthStateType} from '@/app/redux/types/types'

const initialState = {
    user: {} as UserType,
    isAuth: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthStateType>) => {
            state.user = action.payload.user;
            state.isAuth = action.payload.isAuth;
        },
    }
})

export const { login } = authSlice.actions;

export default authSlice.reducer;