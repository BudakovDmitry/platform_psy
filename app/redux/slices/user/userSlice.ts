import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "@/app/types/types";
import $api from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";

export const fetchUserById = createAsyncThunk(
    'users/fetchUserById',
    async (id: string) => {
        const response = await $api.get(`${Endpoints.USERS}/${id}`);
        return response.data;
    }
);

export const addDiarySuccess = createAsyncThunk(
    'users/addDiarySuccess',
    async (user: UserType) => {
        const response = await $api.put(Endpoints.USERS, user);
        return response.data;
    }
);

export const addDiaryOfGoodness = createAsyncThunk(
    'users/addDiaryOfGoodness',
    async (user: UserType) => {
        const response = await $api.put(Endpoints.USERS, user);
        return response.data;
    }
);

export const addAvatar = createAsyncThunk(
    'users/addAvatar',
    async (formData) => {
        const response = await $api.post(`${Endpoints.FILES}/upload`, formData)
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


        builder.addCase(addDiarySuccess.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(addDiarySuccess.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.user = action.payload;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(addDiarySuccess.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });


        builder.addCase(addDiaryOfGoodness.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(addDiaryOfGoodness.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.user = action.payload;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(addDiaryOfGoodness.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });


        builder.addCase(addAvatar.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(addAvatar.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.user = action.payload;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(addAvatar.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });
    },
})

export const {} = userSlice.actions;

export default userSlice.reducer;