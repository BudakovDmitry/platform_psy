import { Providers } from "./providers";
import { ReactNode } from 'react';

const PlatformLayout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Providers>
                {children}
            </Providers>
        </>
    )
}

export default PlatformLayout;