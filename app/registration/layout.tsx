import { Providers } from "./providers";
import { ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Slide } from 'react-toastify';

const RegistrationLayout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Providers>
                {children}
                <ToastContainer
                    transition={Slide}
                    theme="colored"
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Providers>
        </>
    )
}

export default RegistrationLayout;