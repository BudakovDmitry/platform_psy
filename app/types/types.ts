export type UserType = {
    _id: string
    email: string
    password: string
    isAcivated: boolean
    phoneNumber: string
    activationLink: string
    name: string
    roles: string[]
}

export type AuthResponse = {
    accessToken: string
    refreshToken: string
    user: UserType
}