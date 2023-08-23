'use client'

import { Providers } from "./providers";
import {ReactNode, useEffect, useState} from 'react';
import Sidebar from "@/app/components/Sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {redirect} from "next/navigation";
import {checkAuth} from "@/app/redux/slices/auth/authSlice";
import {fetchUserById} from "@/app/redux/slices/user/userSlice";
import Loader from "@/app/components/Loader/Loader";

const PlatformLayout = ({children}: { children: ReactNode }) => {
    const store = useSelector((state: any) => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        localStorage.getItem('token') ? dispatch(checkAuth()) : redirect('/login')
        // @ts-ignore
        localStorage.getItem('userId') && dispatch(fetchUserById(localStorage.getItem('userId')))
    }, [])

    if(store.isChecking) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
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
                <div className='min-h-screen flex flex-auto bg-gray-50 text-gray-800'>
                    <Sidebar />
                    <div className='ml-72 w-full'>
                        {children}
                    </div>
                </div>
            </Providers>
        </>
    )
}

export default PlatformLayout;