export type UserType = {
    _id: string
    email: string
    password: string
    isActivated: boolean
    isActive: boolean
    phoneNumber: string
    activationLink: string
    name: string
    diarySuccess: DiarySuccessType[]
    diaryOfGoodness: DiaryOfGoodnessType[]
    roles: string[]
}

export type DiarySuccessType = {
    _id: string
    title: string
    description: string
    date: string
}

export type DiaryOfGoodnessType = {
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

export type ChatType = {
    _id: string; // Ідентифікатор чату
    participants: string[]; // Масив ідентифікаторів учасників чату (наприклад, ідентифікатори користувачів)
    messages: MessageType[]; // Масив повідомлень у чаті
}

export type MessageType = {
    _id: string; // Ідентифікатор повідомлення
    content: string; // Вміст повідомлення
    sender: string; // Ідентифікатор відправника повідомлення (наприклад, ідентифікатор користувача)
    timestamp: string; // Дата та час надсилання повідомлення (як рядок або об'єкт Date)
}

export type NewChatType = {
    name: string;
    participants: string[]
}

export type NewMessageType = {
    chatId: string;
    messageContent: NewMessageContentType
}

export type NewMessageContentType = {
    sender: string;
    content: string;
    timestamp: Date;
    _id: string;
}