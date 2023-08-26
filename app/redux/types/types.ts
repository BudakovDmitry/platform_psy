import {ChatType, UserType} from "@/app/types/types";

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

export type AdminStateType = {
    admin: UserType
    pending: boolean
    errors: string | null
    succeeded: boolean
}

export type CustomersStateType = {
    customers: UserType[]
    pending: boolean
    errors: string | null
    succeeded: boolean
}

export type CustomerStateType = {
    customer: UserType
    pending: boolean
    errors: string | null
    succeeded: boolean
}

export type ChatsStateType = {
    chats: ChatType[]
    pending: boolean
    errors: string | null
    succeeded: boolean
    isCreated: boolean
}
