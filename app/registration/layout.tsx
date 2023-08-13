import { Providers } from "./providers";
import { ReactNode } from 'react';

const RegistrationLayout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Providers>
                {children}
            </Providers>
        </>
    )
}

export default RegistrationLayout;