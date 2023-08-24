'use client'

import {useSelector} from "react-redux";
import {Routes} from "@/app/helpers/routes";
import {redirect} from "next/navigation";
import {Roles} from "@/app/helpers/roles";

const Calendar = () => {

    const user = useSelector((state: any) => state.user.user)

    if (!user.roles.includes(Roles.ADMIN)) {
        redirect(Routes.DASHBOARD)
    }
    return (
        <h1>Calendar</h1>
    )
}

export default Calendar;