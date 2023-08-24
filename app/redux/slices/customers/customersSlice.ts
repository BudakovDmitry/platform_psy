import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "@/app/types/types";
import $api from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";
import {Roles} from "@/app/helpers/roles";

export const fetchAllCustomers = createAsyncThunk(
    'customers/fetchAllCustomers',
    async () => {
        const response = await $api.get(Endpoints.USERS);
        return response.data;
    }
);

export const updateCustomer = createAsyncThunk(
    'customers/updateCustomer',
    async (user: UserType) => {
        const response = await $api.put(Endpoints.USERS, user);
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
            const customersWithoutAdmins = action.payload.filter((customer: UserType) => !customer.roles.includes(Roles.ADMIN))

            state.pending = false;
            state.customers = customersWithoutAdmins;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(fetchAllCustomers.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });


        builder.addCase(updateCustomer.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(updateCustomer.fulfilled, (state: any, action: any) => {
            const newCustomersArray = state.customers.map((customer: UserType) => {
                if(customer._id === action.payload._id) {
                    customer = action.payload
                    return customer
                }
                return customer
            })
            state.pending = false;
            state.customers = newCustomersArray;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(updateCustomer.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });
    },
})

export const {} = customersSlice.actions;

export default customersSlice.reducer;