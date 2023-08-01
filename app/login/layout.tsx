import { Providers } from "./providers";
import { ReactNode } from 'react';

const LoginLayout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Providers>
                {children}
            </Providers>
        </>
    )
}

export default LoginLayout;