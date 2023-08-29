'use client'

import Chat from "@/app/components/Chat/Chat";
import {useEffect, useState} from "react";
import {fetchAdmin} from "@/app/redux/slices/admin/adminSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import {addMessage, createChat, fetchChatsByUserId} from "@/app/redux/slices/chats/chatsSlice";
import Loader from "@/app/components/Loader/Loader";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {NewMessageType} from "@/app/types/types";

const Messenger = () => {
    const dispatch = useDispatch();
    const admin = useSelector((state: RootState) => state.admin);
    const chats = useSelector((state: RootState) => state.chats);

    console.log('chats', chats)
    const isLoading = () => {
        return chats.pending || admin.pending
    }

    const userId = localStorage.getItem('userId') || ''

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchAdmin())

        // @ts-ignore
        dispatch(fetchChatsByUserId(userId))
    }, []);

    const onCreateChat = () => {

        // @ts-ignore
        dispatch(createChat({
            name: uuidv4(),
            participants: [userId, admin.admin._id]
        }))
    }

    const sendMessage = (message: NewMessageType) => {
        // @ts-ignore
        dispatch(addMessage(message))
    }

    if(isLoading()) {
        return <Loader />
    }


    return (
        <>
            <Chat onCreateChat={onCreateChat} chats={chats.chats} onSendMessage={sendMessage} admin={admin.admin} isChatsLoading={chats.pending} />
        </>
    )
}

export default Messenger;