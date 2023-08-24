'use client'

import TableCustomers from "@/app/components/TableCustomers/TableCustomers";
import {useDispatch, useSelector} from "react-redux";
import {Roles} from "@/app/helpers/roles";
import {redirect} from "next/navigation";
import {Routes} from "@/app/helpers/routes";
import {fetchAllCustomers} from "@/app/redux/slices/customersSlice/customersSlice";
import {useEffect} from "react";
import Loader from "@/app/components/Loader/Loader";

const Customers = () => {

    const user = useSelector((state: any) => state.user.user)
    const customers = useSelector((state: any) => state.customers)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchAllCustomers())
    }, []);


    console.log('customers', customers)
    if (!user.roles.includes(Roles.ADMIN)) {
        redirect(Routes.DASHBOARD)
    }

    if(customers.pending) {
        return (
            <div className='w-full h-screen flex items-center justify-center bg-stone-100'>
                <Loader />
            </div>
        )
    }

    return(
        <div className='overflow-hidden flex justify-center'>
            <TableCustomers customers={customers.customers} />
        </div>
    )
}

export default Customers