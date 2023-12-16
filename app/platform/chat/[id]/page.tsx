'use client'

import {useDispatch, useSelector} from "react-redux";
import Loader from "@/app/components/Loader/Loader";
import ChatComponent from "@/app/components/ChatComponent/ChatComponent";
import {RootState} from "@/app/redux/store";
import {useEffect} from "react";
import {fetchAdmin} from "@/app/redux/slices/admin/adminSlice";
import {addMessage, createChat, fetchChatsByUserId} from "@/app/redux/slices/chats/chatsSlice";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {NewMessageType} from "@/app/types/types";

type ChatPropsType = {
    params: {
        id: string
    }
}

const Chat = ({ params }: ChatPropsType) => {
    const dispatch = useDispatch();
    const admin = useSelector((state: RootState) => state.admin);
    const chats = useSelector((state: RootState) => state.chats);

    const isLoading = () => {
        return chats.pending || admin.pending
    }

    console.log('chats', chats);
    console.log('params', params);

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
            <ChatComponent onCreateChat={onCreateChat} chats={chats.chats} onSendMessage={sendMessage} admin={admin.admin} isChatsLoading={chats.pending} currentChatForAdmin={params.id !== 'user' ? params.id : undefined} />
        </>
    )
}

export default Chat;