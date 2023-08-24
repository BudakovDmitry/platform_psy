'use client'

import {Button} from "@nextui-org/button";
import ArrowLeftIcon from '@/public/arrow_left.png'
import Image from 'next/image'
import {useRouter} from "next/navigation";
import {Routes} from "@/app/helpers/routes";

type CustomerProps = {
    params: {
        id: string
    }
}

const Customer = ({ params }: CustomerProps) => {
    const router = useRouter();

    const backToCustomersPage = () => {
        router.push(Routes.CUSTOMERS)
    }
    return (
        <div className='p-4'>
            <Button
                isIconOnly
                aria-label="Like"
                variant='bordered'
                className='border-teal-800'
                onClick={backToCustomersPage}
            >
                <Image src={ArrowLeftIcon} alt='arrow back' />
            </Button>
            <h1>{params.id}</h1>
        </div>
    )
}

export default Customer