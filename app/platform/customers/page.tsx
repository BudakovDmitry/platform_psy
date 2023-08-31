'use client'

import TableCustomers from "@/app/components/TableCustomers/TableCustomers";
import {useDispatch, useSelector} from "react-redux";
import {Roles} from "@/app/helpers/roles";
import {redirect} from "next/navigation";
import {Routes} from "@/app/helpers/routes";
import {updateCustomer} from "@/app/redux/slices/customers/customersSlice";
import {UserType} from "@/app/types/types";
import { useRouter } from 'next/navigation'

const Customers = () => {

    const user = useSelector((state: any) => state.user.user)
    const customers = useSelector((state: any) => state.customers)
    const dispatch = useDispatch()
    const router = useRouter()

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

    const openCustomer = (id: string) => {
        router.push(`${Routes.CUSTOMER}/${id}`)
    }

    return(
        <div className='overflow-hidden flex justify-center'>
            <TableCustomers customers={customers.customers} sendUpdateCustomer={sendUpdateCustomer} openCustomer={openCustomer} />
        </div>
    )
}

export default Customers