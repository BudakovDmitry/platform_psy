import { Providers } from "./providers";
import { ReactNode } from 'react';
import Sidebar from "@/app/components/Sidebar/Sidebar";

const PlatformLayout = ({children}: { children: ReactNode }) => {
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