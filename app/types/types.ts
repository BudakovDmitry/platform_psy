export type UserType = {
    email: string
    password: string
    isAcivated: boolean
    phoneNumber: string
    id: string
}

export type AuthResponse = {
    accessToken: string
    refreshToken: string
    user: UserType
}