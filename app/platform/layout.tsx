'use client'

import { Providers } from "./providers";
import {ReactNode, useEffect, useState} from 'react';
import Sidebar from "@/app/components/Sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {redirect, usePathname} from "next/navigation";
import {checkAuth} from "@/app/redux/slices/auth/authSlice";
import {fetchUserById} from "@/app/redux/slices/user/userSlice";
import Loader from "@/app/components/Loader/Loader";
import {logout} from "@/app/redux/slices/auth/authSlice";

const PlatformLayout = ({children}: { children: ReactNode }) => {
    const store = useSelector((state: any) => state.auth)
    const user = useSelector((state: any) => state.user.user)
    const dispatch = useDispatch();
    const pathname = usePathname();

    const logoutUser = () => {
        // @ts-ignore
        dispatch(logout())
    }

    useEffect(() => {
        // @ts-ignore
        localStorage.getItem('token') ? dispatch(checkAuth()) : redirect('/login')
        // @ts-ignore
        localStorage.getItem('userId') && dispatch(fetchUserById(localStorage.getItem('userId')))
    }, [])

    if(store.isChecking) {
        return (
            <div className='w-full h-screen flex items-center justify-center bg-stone-100'>
                <Loader />
            </div>
        )
    }

    if(!store.isChecking && !store.isAuth) {
        redirect('/login')
    }


    return (
        <>
            <Providers>
                <div className='min-h-screen flex flex-auto bg-stone-100 text-gray-800'>
                    <Sidebar user={user} pathname={pathname} logoutUser={logoutUser} />
                    <div className='ml-72 w-full'>
                        {children}
                    </div>
                </div>
            </Providers>
        </>
    )
}

export default PlatformLayout;