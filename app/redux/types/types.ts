import {UserType} from "@/app/types/types";

export type AuthStateType = {
    user: UserType
    isAuth: boolean
    pending: boolean
    errors: string | null
    succeeded: boolean
    isChecking: boolean
}

export type UserStateType = {
    user: UserType
    pending: boolean
    errors: string | null
    succeeded: boolean
}
