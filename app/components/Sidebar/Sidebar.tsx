'use client'

import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from "next/navigation";
import {SidebarItems} from "@/app/components/Sidebar/SidebarItems";
import Logo from "@/app/components/Logo/Logo";

const Sidebar = () => {
    const pathname = usePathname()

    return (
            <div className="fixed flex flex-col top-0 left-0 w-72 bg-white h-full shadow-xl">
                <div className="flex items-center justify-center h-24">
                    <Logo />
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        {SidebarItems.map(item => {
                            return (item.link === undefined ? (
                                <li key={item.id} className="px-5">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="text-sm font-light tracking-wide text-gray-500">{item.name}</div>
                                    </div>
                                </li>
                            ) : (
                                <li key={item.id}>
                                    <Link href={item.link} className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 hover:border-teal-800 pr-6 ${item.link === pathname ? 'bg-gray-100 text-gray-800 border-l-4 border-teal-800' : 'border-transparent'}`}>
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <Image className='w-5 h-5' src={item.icon} alt='test' />
                                          </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">{item.name}</span>
                                    </Link>
                                </li>
                            ))
                        })}
                    </ul>
                </div>
            </div>
    )
}

export default Sidebar;