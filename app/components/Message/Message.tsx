import {UserType} from "@/app/types/types";
import {Avatar} from "@nextui-org/react";
import {API_URL} from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";

type MessageProps = {
    isCurrentSender: boolean
    message: string
    currentUser: UserType
    companionUser: UserType
}

const Message = ({isCurrentSender, message, currentUser, companionUser}: MessageProps) => {

    if (isCurrentSender) {
        return (
            <div className="col-start-6 col-end-13 p-3 rounded-lg">
                <div className="flex items-center justify-start flex-row-reverse">
                    <Avatar className='min-w-unit-10' isBordered radius="md" src={`${API_URL}${Endpoints.AVATAR}/1694209400395-keanu.jpg`} />
                    <div
                        className="relative mr-3 text-sm bg-teal-600 py-2 px-4 shadow rounded-xl"
                    >
                        <p className='text-stone-50'>
                            {message}
                        </p>
                        {/*<div*/}
                        {/*    className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-teal-800"*/}
                        {/*>*/}
                        {/*    Seen*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
                <Avatar className='min-w-unit-10' isBordered radius="md" src={`${API_URL}${Endpoints.AVATAR}/1694209883537-A-4777936-1539363475-4233.jpg`} />
                <div
                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Message;