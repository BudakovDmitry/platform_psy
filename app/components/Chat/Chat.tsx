'use client'

import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import SendIcon from '@/public/send.png'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import {API_URL} from "@/app/http/axios";
import Image from "next/image";
import {fetchAdmin} from "@/app/redux/slices/admin/adminSlice";
import {useDispatch} from "react-redux";
import {ChatType} from "@/app/types/types";

const socket = io('http://localhost:5000', {
    transports: ['websocket'],
});

type ChatProps = {
    chats: ChatType[]
    onCreateChat: () => void
}

const Chat = ({onCreateChat, chats}: ChatProps) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.on('message', (message) => {
            // @ts-ignore
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, []);

    const sendMessage = () => {
        if (message) {
            socket.emit('message', message);
            setMessage('');
        }
    };
    {/*{messages.map((msg, index) => (*/}
    {/*    <div key={index}>{msg}</div>*/}
    {/*))}*/}

    const addEmojiToMessage = (emoji: { native: string; }) => {
        setMessage(previosMessage => previosMessage + emoji.native)
    }

    console.log('chats', chats)

    return (
        <div className="flex flex-col flex-auto h-full p-6">
            <div
                className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
            >
                <div className="flex flex-col h-full overflow-x-auto mb-4">

                    {!chats.length ? <button onClick={onCreateChat}>Start chat</button> : (<div className="flex flex-col h-full">
                    <div className="grid grid-cols-12 gap-y-2">
                        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                            <div className="flex flex-row items-center">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    A
                                </div>
                                <div
                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                >
                                    <div>Hey How are you today?</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                            <div className="flex flex-row items-center">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    A
                                </div>
                                <div
                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                >
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Vel ipsa commodi illum saepe numquam maxime
                                        asperiores voluptate sit, minima perspiciatis.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-6 col-end-13 p-3 rounded-lg">
                            <div className="flex items-center justify-start flex-row-reverse">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    A
                                </div>
                                <div
                                    className="relative mr-3 text-sm bg-teal-600 py-2 px-4 shadow rounded-xl"
                                >
                                    <p className='text-stone-50'>I'm ok what about you?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-6 col-end-13 p-3 rounded-lg">
                            <div className="flex items-center justify-start flex-row-reverse">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    A
                                </div>
                                <div
                                    className="relative mr-3 text-sm bg-teal-600 py-2 px-4 shadow rounded-xl"
                                >
                                    <div className='text-stone-50'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                            <div className="flex flex-row items-center">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    A
                                </div>
                                <div
                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                >
                                    <div>Lorem ipsum dolor sit amet !</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-6 col-end-13 p-3 rounded-lg">
                            <div className="flex items-center justify-start flex-row-reverse">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    A
                                </div>
                                <div
                                    className="relative mr-3 text-sm bg-teal-600 py-2 px-4 shadow rounded-xl"
                                >
                                    <p className='text-stone-50'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                                    </p>
                                    <div
                                        className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-teal-800"
                                    >
                                        Seen
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                            <div className="flex flex-row items-center">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    A
                                </div>
                                <div
                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                >
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Perspiciatis, in.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}

                </div>
                <div
                    className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
                >
                    <div>
                        <button
                            className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-grow ml-4">
                        <div className="relative w-full">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                            />
                            <Popover placement="top">
                                <PopoverTrigger>
                                    <Button variant="light" className='absolute flex items-center justify-center data-[hover=true]:bg-transparent h-full w-12 right-0 top-0 text-gray-400'>
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className='p-0'>
                                    <Picker
                                        data={data}
                                        onEmojiSelect={addEmojiToMessage}
                                        locale='uk'
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className="ml-4">
                        <Button
                            isIconOnly
                            variant='bordered'
                            onClick={sendMessage}
                            className="flex p-2 items-center justify-center border-teal-800 rounded-xl text-white"
                        >
                            <Image src={SendIcon} alt='Send' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
