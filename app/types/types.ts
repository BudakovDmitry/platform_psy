export type UserType = {
    _id: string
    email: string
    password: string
    isAcivated: boolean
    phoneNumber: string
    activationLink: string
    name: string
    diarySuccess: DiarySuccessType[]
    roles: string[]
}

export type DiarySuccessType = {
    _id: string
    title: string
    description: string
    date: string
}

export type AuthResponse = {
    accessToken: string
    refreshToken: string
    user: UserType
}