'use client'

import { Providers } from "./providers";
import {ReactNode, useEffect} from 'react';
import Sidebar from "@/app/components/Sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {redirect} from "next/navigation";
import {checkAuth} from "@/app/redux/slices/auth/authSlice";

const PlatformLayout = ({children}: { children: ReactNode }) => {
    const store = useSelector((state: any) => state.auth)
    const dispatch = useDispatch();
    console.log('store', store)

    useEffect(() => {
        // @ts-ignore
        localStorage.getItem('token') ? dispatch(checkAuth()) : redirect('/login')
    }, [])

    if(store.isChecking) {
        return <p>Loading...</p>
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