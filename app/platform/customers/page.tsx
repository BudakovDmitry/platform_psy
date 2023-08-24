'use client'

import TableCustomers from "@/app/components/TableCustomers/TableCustomers";
import {useDispatch, useSelector} from "react-redux";
import {Roles} from "@/app/helpers/roles";
import {redirect} from "next/navigation";
import {Routes} from "@/app/helpers/routes";
import {fetchAllCustomers, updateCustomer} from "@/app/redux/slices/customersSlice/customersSlice";
import {useEffect} from "react";
import Loader from "@/app/components/Loader/Loader";
import {UserType} from "@/app/types/types";

const Customers = () => {

    const user = useSelector((state: any) => state.user.user)
    const customers = useSelector((state: any) => state.customers)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchAllCustomers())
    }, []);

    if (!user.roles.includes(Roles.ADMIN)) {
        redirect(Routes.DASHBOARD)
    }

    const sendUpdateCustomer = (user: UserType) => {
        // @ts-ignore
        dispatch(updateCustomer({
            ...user,
            isActive: !user.isActive,
        }))
    }

    return(
        <div className='overflow-hidden flex justify-center'>
            <TableCustomers customers={customers.customers} sendUpdateCustomer={sendUpdateCustomer} />
        </div>
    )
}

export default Customers