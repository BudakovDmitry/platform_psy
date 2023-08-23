'use client'

import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { UserType } from "@/app/types/types";
import $api, {API_URL} from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";
import {fetchUsers} from "@/app/redux/slices/users/usersSlice";
import {redirect} from "next/navigation";
import {Routes} from "@/app/helpers/routes";
import axios from "axios";


type UserLoginInfo = {
    email: string
    password: string
}
export const login = createAsyncThunk(
    'user/login',
    async (user: UserLoginInfo) => {

        const response = await $api.post(Endpoints.AUTH_LOGIN, {email: user.email, password: user.password});
        if(response.status === 200) {
            localStorage.setItem('token', response.data.accessToken);
        }
        return response.data;
    }
);

export const logout = createAsyncThunk(
    'user/logout',
    async () => {

        const response = await $api.post(Endpoints.AUTH_LOGOUT);
        if(response.status === 200) {
            localStorage.removeItem('token');
        }
        return response.data;
    }
);

export const checkAuth = createAsyncThunk(
    'user/checkAuth',
    async () => {

        const response = await axios.get(`${API_URL}${Endpoints.AUTH_REFRESH}`, { withCredentials: true });
        console.log('response check auth', response)
        if(response.status === 200) {
            localStorage.setItem('token', response.data.accessToken);
        }
        return response.data;
    }
);

const initialState = {
    user: {} as UserType,
    isAuth: false,
    pending: false,
    isChecking: true,
    errors: null,
    succeeded: false,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(login.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.user = action.payload;
            state.isAuth = true;
            state.succeeded = true;
            state.errors = null;
            state.isChecking = false;
        });
        builder.addCase(login.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
            state.isChecking = false;
        });


        builder.addCase(logout.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(logout.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.user = {};
            state.isAuth = false;
            state.succeeded = true;
            state.errors = null;
            state.isChecking = false;
        });
        builder.addCase(logout.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
            state.isChecking = false;
        });


        builder.addCase(checkAuth.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(checkAuth.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.user = action.payload;
            state.isAuth = true;
            state.succeeded = true;
            state.isChecking = false;
            state.errors = null;
        });
        builder.addCase(checkAuth.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = 'error text';
            state.isChecking = false;
        });
    },
})

export const {} = authSlice.actions;

export default authSlice.reducer;