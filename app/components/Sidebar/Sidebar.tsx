'use client'

import Link from 'next/link'
import Image from 'next/image';
import {SidebarItems} from "@/app/components/Sidebar/SidebarItems";
import Logo from "@/app/components/Logo/Logo";
import {UserType} from "@/app/types/types";
import Loader from "@/app/components/Loader/Loader";
import {AvatarIcon, User} from "@nextui-org/react";
import {API_URL} from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";

type SidebarProps = {
    user: UserType
    pathname: string
    logoutUser: () => void
}

const Sidebar = ({ user, pathname, logoutUser }: SidebarProps) => {
    if(!user || !user.roles?.length) {
        return <Loader/>
    }

    return (
            <div className="fixed flex flex-col top-0 left-0 w-72 bg-white h-full shadow-xl">
                <div className="flex items-center justify-center h-24">
                    <Logo />
                </div>
                <div className='flex ml-5 mt-4 z-20'>
                    <User
                        name={user.name}
                        description={user.email}
                        avatarProps={{
                            src: user.avatar ? `${API_URL}${Endpoints.AVATAR}/${user.avatar}` : '',
                        }}
                    />
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        {SidebarItems.map(item => {
                            if(item.roles.includes(user.roles[0])) {
                                return (item.link === undefined ? (
                                    <li key={item.id} className="px-5">
                                        <div className="flex flex-row items-center h-8">
                                            <div className="text-sm font-light tracking-wide text-gray-500">{item.name}</div>
                                        </div>
                                    </li>
                                ) : (
                                    <li key={item.id}>
                                        <Link
                                            href={item.link}
                                            onClick={item.link === 'logout' ? (e) => {
                                                e.preventDefault();
                                                logoutUser();
                                            } : undefined}
                                            className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 hover:border-teal-800 pr-6 ${item.link === pathname ? 'bg-gray-100 text-gray-800 border-l-4 border-teal-800' : 'border-transparent'}`}>
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <Image className='w-5 h-5' src={item.icon} alt='test' />
                                          </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">{item.name}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        })}
                    </ul>
                </div>
            </div>
    )
}

export default Sidebar;