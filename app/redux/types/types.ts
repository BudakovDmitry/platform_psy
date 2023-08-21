import {UserType} from "@/app/types/types";

export type AuthStateType = {
    user: UserType
    isAuth: boolean
}

export type UsersStateType = {
    users: UserType[]
    pending: boolean
    errors: string | null
    succeeded: boolean
}
