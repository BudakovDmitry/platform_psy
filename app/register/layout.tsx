import { Providers } from "./providers";
import { ReactNode } from 'react';

const RegisterLayout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Providers>
                {children}
            </Providers>
        </>
    )
}

export default RegisterLayout;