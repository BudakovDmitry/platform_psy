'use client'

import Chat from "@/app/components/Chat/Chat";
import {useEffect, useState} from "react";
import {fetchAdmin} from "@/app/redux/slices/admin/adminSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import {createChat, fetchChatsByUserId} from "@/app/redux/slices/chats/chatsSlice";
import Loader from "@/app/components/Loader/Loader";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

const Messanger = () => {
    const dispatch = useDispatch();
    const admin = useSelector((state: RootState) => state.admin);
    const chats = useSelector((state: RootState) => state.chats);
    console.log('chats', chats)
    console.log('admin', admin)
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

    // if(!isLoading() && !chats.chats.length && !chats.isCreated) {
    //     //@ts-ignore
    // }


    if(isLoading()) {
        return <Loader />
    }


    return (
        <>
            <Chat onCreateChat={onCreateChat} chats={chats.chats} />
        </>
    )
}

export default Messanger;