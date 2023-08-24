import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "@/app/types/types";
import $api from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";
import {Roles} from "@/app/helpers/roles";

export const fetchCustomerById = createAsyncThunk(
    'customer/fetchCustomerById',
    async (id: string) => {
        const response = await $api.get(`${Endpoints.USERS}/${id}`);
        return response.data;
    }
);

export const updateCustomerById = createAsyncThunk(
    'customer/updateCustomerById',
    async (user: UserType) => {
        const response = await $api.put(Endpoints.USERS, user);
        return response.data;
    }
);

const initialState = {
    customer: {} as UserType,
    pending: false,
    errors: null,
    succeeded: false,
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCustomerById.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(fetchCustomerById.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.customer = action.payload;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(fetchCustomerById.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });


        builder.addCase(updateCustomerById.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(updateCustomerById.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.customer = action.payload;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(updateCustomerById.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });
    },
})

export const {} = customerSlice.actions;

export default customerSlice.reducer;