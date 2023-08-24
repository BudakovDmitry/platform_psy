import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "@/app/types/types";
import $api from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";

export const fetchAllCustomers = createAsyncThunk(
    'customers/fetchAllCustomers',
    async () => {
        const response = await $api.get(Endpoints.USERS);
        console.log('response customers data', response.data)
        return response.data;
    }
);

const initialState = {
    customers: [] as UserType[],
    pending: false,
    errors: null,
    succeeded: false,
}

export const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCustomers.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(fetchAllCustomers.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.customers = action.payload;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(fetchAllCustomers.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });
    },
})

export const {} = customersSlice.actions;

export default customersSlice.reducer;