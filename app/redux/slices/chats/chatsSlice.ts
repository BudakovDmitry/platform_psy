import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {ChatType, NewChatType, NewMessageType} from "@/app/types/types";
import $api from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";

export const fetchChats = createAsyncThunk(
    'chats/fetchChats',
    async () => {
        const response = await $api.get(Endpoints.CHATS);
        return response.data;
    }
);

export const fetchChatsByUserId = createAsyncThunk(
    'chats/fetchChatsByUserId',
    async (id: string) => {
        const response = await $api.get(`${Endpoints.CHATS}/user/${id}`);
        return response.data;
    }
);

export const createChat = createAsyncThunk(
    'chats/createChat',
    async (newChat: NewChatType) => {
        const response = await $api.post(Endpoints.CHATS, newChat);
        return response.data;
    }
);

export const addMessage = createAsyncThunk(
    'chats/addMessage',
    async (message: NewMessageType) => {
        const response = await $api.post(`${Endpoints.CHATS}/${message.chatId}/messages`, message.messageContent);
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
        addMessageReducer: (state, action) => {
            const isMessageAlreadyExist = state.chats[0].messages.some((message: any) => message._id === action.payload._id);

            if (!isMessageAlreadyExist) {
                state.chats[0].messages.push(action.payload);
            }
        },
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



        builder.addCase(addMessage.pending, (state: any) => {
            state.pending = true;
            state.errors = null;
            state.succeeded = false;
        });
        builder.addCase(addMessage.fulfilled, (state: any, action: any) => {

            state.pending = false;
            state.succeeded = true;
            state.errors = null;
        });
        builder.addCase(addMessage.rejected, (state: any) => {
            state.pending = false;
            state.succeeded = false;
            state.errors = null;
        });
    },
})

export const { addMessageReducer } = chatsSlice.actions;

export default chatsSlice.reducer;