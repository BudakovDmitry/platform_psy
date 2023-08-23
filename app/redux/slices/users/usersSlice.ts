import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "@/app/types/types";
import $api from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {

        const response = await $api.get(Endpoints.USERS);
        return response.data;
    }
);

const initialState = {
    users: [] as UserType[],
    pending: false,
    errors: null,
    succeeded: false,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(fetchUsers.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.users = action.payload;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(fetchUsers.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });
    },
})

export const {} = usersSlice.actions;

export default usersSlice.reducer;