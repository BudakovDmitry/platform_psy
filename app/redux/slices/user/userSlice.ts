import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "@/app/types/types";
import $api from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";

export const fetchUserById = createAsyncThunk(
    'users/fetchUserById',
    async (id: string) => {
        console.log('id', id)
        const response = await $api.get(`${Endpoints.USERS}/${id}`);
        console.log('response user', response)
        return response.data;
    }
);

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (user: UserType) => {
        console.log('user thunk', user)
        const response = await $api.put(Endpoints.USERS, user);
        console.log('response update user', response)
        return response.data;
    }
);

const initialState = {
    user: {} as UserType,
    pending: false,
    errors: null,
    succeeded: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(fetchUserById.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.user = action.payload;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(fetchUserById.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });


        builder.addCase(updateUser.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(updateUser.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.user = action.payload;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(updateUser.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });
    },
})

export const {} = userSlice.actions;

export default userSlice.reducer;