import Link from "next/link";
import { Routes } from "@/app/helpers/routes";

const Logo = () => {
    return(
        <Link href={Routes.PLATFORM} className='relative w-20 h-20 bg-white'>
            <div className='absolute w-20 h-20 top-7 left-7 bg-transparent border-l-4 border-gray-500 origin-center rotate-45 after:content-[""] after:absolute after:w-20 after:h-20 after:left-0 after:bg-white'></div>
            <div className='absolute left-0 -bottom-0.5 w-3 h-3 bg-transparent border-3 border-amber-500 rounded-sm origin-center translate-x-10 -translate-y-14'></div>
        </Link>
    )
}

export default Logo;