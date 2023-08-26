import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {ChatType, NewChatType} from "@/app/types/types";
import $api from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";

export const fetchChats = createAsyncThunk(
    'chats/fetchChats',
    async () => {
        const response = await $api.get(Endpoints.CHATS);
        console.log('response', response)
        return response.data;
    }
);

export const fetchChatsByUserId = createAsyncThunk(
    'chats/fetchChatsByUserId',
    async (id: string) => {
        console.log('id', id)
        const response = await $api.get(`${Endpoints.CHATS}/user/${id}`);
        console.log('response fetch by user id', response)
        return response.data;
    }
);

export const createChat = createAsyncThunk(
    'chats/createChat',
    async (newChat: NewChatType) => {
        const response = await $api.post(Endpoints.CHATS, newChat);
        console.log('create chat', response)
        return response.data;
    }
);

const initialState = {
    chats: [] as ChatType[],
    pending: true,
    errors: null,
    succeeded: false,
    isCreated: false
}

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChats.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(fetchChats.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.chats = action.payload;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(fetchChats.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });

        builder.addCase(fetchChatsByUserId.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(fetchChatsByUserId.fulfilled, (state: any, action: any) => {
            state.pending = false;
            state.chats = action.payload;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(fetchChatsByUserId.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });


        builder.addCase(createChat.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(createChat.fulfilled, (state: any, action: any) => {
            const chatsArray = [action.payload]
            console.log(chatsArray)
            state.pending = false;
            state.chats = [action.payload];
            state.succeeded = true;
            state.isCreated = true;
            state.errors = null;
        });
        builder.addCase(createChat.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });
    },
})

export const {} = chatsSlice.actions;

export default chatsSlice.reducer;