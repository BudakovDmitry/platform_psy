import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "@/app/types/types";
import $api from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";
import {Roles} from "@/app/helpers/roles";

export const fetchAdmin = createAsyncThunk(
    'admin/fetchAdmin',
    async () => {
        const response = await $api.get(`${Endpoints.USERS}?role=ADMIN`);
        console.log('response admin', response)
        return response.data;
    }
);

const initialState = {
    admin: {} as UserType,
    pending: true,
    errors: null,
    succeeded: false,
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdmin.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(fetchAdmin.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.admin = action.payload[0];
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(fetchAdmin.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });
    },
})

export const {} = adminSlice.actions;

export default adminSlice.reducer;