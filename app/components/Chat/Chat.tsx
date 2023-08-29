'use client'

import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import SendIcon from '@/public/send.png'
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
    ScrollShadow
} from "@nextui-org/react";
import $api, {API_URL} from "@/app/http/axios";
import Image from "next/image";
import {fetchAdmin} from "@/app/redux/slices/admin/adminSlice";
import {useDispatch, useSelector} from "react-redux";
import {ChatType, NewMessageType, UserType} from "@/app/types/types";
import {Roles} from "@/app/helpers/roles";
import {Routes} from "@/app/helpers/routes";
import {Endpoints} from "@/app/helpers/endpoints";
import Message from "@/app/components/Message/Message";
import Loader from "@/app/components/Loader/Loader";
import {addMessageReducer} from "@/app/redux/slices/chats/chatsSlice";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

const socket = io('http://localhost:5000', {
    transports: ['websocket'],
});

type ChatProps = {
    chats: ChatType[]
    onCreateChat: () => void
    onSendMessage: (message: NewMessageType) => void
    admin: UserType
    isChatsLoading: boolean
}

const Chat = ({onCreateChat, chats, onSendMessage, admin, isChatsLoading}: ChatProps) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState({
        chatId: '',
        messageContent: {
            sender: localStorage.getItem('userId') || '',
            content: '',
            timestamp: Date,
            _id: ''
        }

    });
    const dispatch = useDispatch();
    const [companion, setCompanion] = useState({} as UserType)
    const user = useSelector((state: any) => state.user)
    const isAdminCurrentUser = user.user.roles.includes(Roles.ADMIN)

    useEffect(() => {
        socket.on('newMessage', (data) => {
            console.log('Отримано нове повідомлення:', data);

            dispatch(addMessageReducer(data))
        });


        if(isAdminCurrentUser) {
            const idUser = chats[0].participants.filter((userId: string) => userId !== user.user._id)
            $api.get(`${Endpoints.USERS}/${idUser}`).then(response => {
                setCompanion(response.data)
            })
        } else {
            setCompanion(admin)
        }
    }, []);

    const sendMessage = () => {
        const idMessage = uuidv4();
        const timestamp = new Date();

        if (message) {
            socket.emit('sendMessage', {
                ...message.messageContent,
                timestamp,
                _id: idMessage
            });
            onSendMessage({
                ...message,
                chatId: chats[0]._id,
                messageContent: {
                    ...message.messageContent,
                    timestamp,
                    _id: idMessage
                }
            })

            setMessage((prevMessage) => {
                return {
                    ...prevMessage,
                    messageContent: {
                        ...prevMessage.messageContent,
                        content: ''
                    }
                }
            });
        }
    };

    const addEmojiToMessage = (emoji: { native: string; }) => {
        setMessage((prevMessage) => {
            return {
                ...prevMessage,
                messageContent: {
                    ...prevMessage.messageContent,
                    content: prevMessage.messageContent.content + emoji.native
                }
            }
        })
    }

    const onChangeMessage = (value: string) => {
        setMessage((prevMessage) => {
            return {
                ...prevMessage,
                messageContent: {
                    ...prevMessage.messageContent,
                    content: value
                }
            }
        })
    }

    if(!Object.keys(companion).length || isChatsLoading/* || !chats[0].messages.length*/) {
        return <Loader />
    }

    return (
        <div className="">
            <div
                className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-screen p-4"
            >

                    <div className="flex flex-col h-full overflow-x-auto mb-4">
                        <ScrollShadow hideScrollBar size={60} className="h-full">

                        {!chats.length ? <button onClick={onCreateChat}>Start chat</button> : (
                        <div className="grid grid-cols-12 gap-y-2">
                            {chats[0].messages.map((message) => {
                                return <Message key={message._id} isCurrentSender={message.sender === user.user._id} message={message.content} currentUser={user.user} companionUser={companion} />
                            })}
                        </div>
                    )}
                        </ScrollShadow>
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
                                value={message.messageContent.content}
                                onChange={(e) => onChangeMessage(e.target.value)}
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
