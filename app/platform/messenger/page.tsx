'use client'

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import {useEffect} from "react";
import {fetchChatsByUserId} from "@/app/redux/slices/chats/chatsSlice";
import {Card, CardBody, User} from "@nextui-org/react";
import {ChatType, UserType} from "@/app/types/types";
import {Divider} from "@nextui-org/react";
import Link from 'next/link'
import {Routes} from "@/app/helpers/routes";
import {API_URL} from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";

const Messenger = () => {
    const dispatch = useDispatch();
    const chats = useSelector((state: RootState) => state.chats);
    const userId = localStorage.getItem('userId') || '';

    console.log('chats', chats);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchChatsByUserId(userId))
    }, []);

    return (
        <div className='p-4'>
            <Card>
                <CardBody>
                    {chats.chats.map((chat: ChatType, index) => (
                        chat.participants.map((user: UserType) => {
                                if (!user.roles.includes('ADMIN')) {
                                    return (
                                        <Link key={chat._id} href={Routes.CHAT} className='hover:bg-gray-100'>
                                            <div>
                                                <User
                                                    name={user.name}
                                                    description={user.email}
                                                    avatarProps={{
                                                        src: user.avatar ? `${API_URL}${Endpoints.AVATAR}/${user.avatar}` : '',
                                                    }}
                                                    className='my-5'
                                                />
                                                {index + 1 !== chats.chats.length ? <Divider/> : null}
                                            </div>
                                        </Link>
                                    )
                                }
                            }
                        )

                    ))}
                </CardBody>
            </Card>
        </div>
    )
}

export default Messenger;