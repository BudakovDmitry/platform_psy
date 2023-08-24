'use client'

import {Button} from "@nextui-org/button";
import ArrowLeftIcon from '@/public/arrow_left.png'
import Image from 'next/image'
import {useRouter} from "next/navigation";
import {Routes} from "@/app/helpers/routes";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCustomerById, updateCustomerById} from "@/app/redux/slices/customer/customerSlice";
import Loader from "@/app/components/Loader/Loader";
import {RootState} from "@/app/redux/store";
import CustomerCard from "@/app/components/CustomerCard";

type CustomerProps = {
    params: {
        id: string
    }
}

const Customer = ({ params }: CustomerProps) => {
    const router = useRouter();
    const customer = useSelector((state: RootState) => state.customer)
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchCustomerById(params.id))
    }, []);


    const backToCustomersPage = () => {
        router.push(Routes.CUSTOMERS)
    }
    const sendUpdateCustomer = (isActiveCustomerValue: boolean) => {
        // @ts-ignore
        dispatch(updateCustomerById(
            {
                ...customer.customer,
                isActive: isActiveCustomerValue
            }
        ))

        backToCustomersPage()
    }

    if(customer.pending) {
        return <Loader />
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
            <CustomerCard customer={customer.customer} sendUpdateCustomer={sendUpdateCustomer} />
        </div>
    )
}

export default Customer