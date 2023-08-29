'use client'

import Image from "next/image";
import {Card, CardBody, ScrollShadow} from "@nextui-org/react";
import bgImage from '@/public/diary_bg_3.jpg'
import {Button} from "@nextui-org/button";
import {useState} from "react";
import dynamic from "next/dynamic";
import {EyeFilledIcon} from "@nextui-org/shared-icons";
import {EyeSlashFilledIcon} from "@/app/components/EyeSlashFilledIcon";
import Entry from "@/app/components/Entry/Entry";
import {useDispatch, useSelector} from 'react-redux';
import {addDiarySuccess} from '@/app/redux/slices/user/userSlice';
import {DiarySuccessType} from "@/app/types/types";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';



const DynamicInput = dynamic(
    () => import('@/app/components/Forms/Input'),
    { ssr: false }
)

const DynamicTextarea = dynamic(
    () => import('@/app/components/Forms/Textarea'),
    { ssr: false }
)

const DiarySuccess = () => {
    const [isShowForm, setIsShowForm] = useState(true)
    const [diaryEntryValue, setDiaryEntryValue] = useState({
        date: '',
        title: '',
        description: '',
    });
    const user = useSelector((state: any) => state.user.user)
    const dispatch = useDispatch();

    const sendDiaryEntry = () => {
        // @ts-ignore
        dispatch(addDiarySuccess({
            ...user,
            diarySuccess: [...user.diarySuccess, {
                ...diaryEntryValue,
                _id: uuidv4()
            }]
        }));

        setDefaultValue()
    }

    const setDefaultValue = () => {
        setDiaryEntryValue({
            date: '',
            title: '',
            description: ''
        })
    }

    const toggleShowForm = () => {
        setIsShowForm(value => !value)
    }

    return (
        <div className='relative w-full'>
            <Image className='absolute opacity-10 inset-0 z-0' fill src={bgImage} alt='background' />
            <div className='px-10 py-6 min-h-screen z-1 relative'>
                <Card
                    isBlurred
                    className='border-none my-10'
                    shadow='sm'
                >
                    <CardBody>
                        <h1 className='text-center font-bold'>{`${user.diarySuccess.length ? 'Продовжи' : 'Почни'} заповнювати свій щоденник`}</h1>
                    </CardBody>
                </Card>
                {isShowForm ? (<div className='flex flex-row justify-between gap-8 items-start'>
                    <DynamicInput
                        type='date'
                        label='Дата'
                        labelPlacement="outside"
                        placeholder=" "
                        className='basis-1/4'
                        value={diaryEntryValue.date}
                        onChange={(e: any) => setDiaryEntryValue(
                            {
                                ...diaryEntryValue,
                                date: e.target.value
                            }
                        )}
                        classNames={{
                            input: [
                                "placeholder:font-bold",
                                "placeholder:italic",
                                "group-data-[hover=true]:bg-transparent",
                                "group-data-[hover=false]:bg-transparent",
                                "italic",
                                "font-medium"
                            ],
                            label: [
                                "font-bold"
                            ],
                            inputWrapper: [
                                "shadow-3xl",
                                "bg-transparent",
                                "h-16",
                                "border-none",
                                "placeholder:font-medium",
                                "placeholder:text-slate-400",
                                "hover:bg-transparent",
                                "group-data-[hover=true]:bg-transparent",
                                "group-data-[hover=false]:bg-transparent",
                                "group-data-[focus=true]:bg-transparent",
                                "backdrop-blur-sm",
                                "!cursor-text",
                            ]
                        }} />
                    <div className='basis-3/4 mb-6'>
                        <div className='mb-6'>
                            <DynamicInput
                                type='text'
                                label='Заголовок'
                                labelPlacement="outside"
                                placeholder="Почни писати..."
                                value={diaryEntryValue.title}
                                onChange={(e: any) => setDiaryEntryValue(
                                    {
                                        ...diaryEntryValue,
                                        title: e.target.value
                                    }
                                )}
                                className='mb-6'
                                classNames={{
                                    input: [
                                        "placeholder:font-bold",
                                        "placeholder:italic",
                                        "group-data-[hover=true]:bg-transparent",
                                        "group-data-[hover=false]:bg-transparent",
                                        "italic",
                                        "font-medium"
                                    ],
                                    label: [
                                        "font-bold"
                                    ],
                                    inputWrapper: [
                                        "shadow-3xl",
                                        "bg-transparent",
                                        "h-16",
                                        "border-none",
                                        "placeholder:font-medium",
                                        "placeholder:text-slate-400",
                                        "hover:bg-transparent",
                                        "group-data-[hover=true]:bg-transparent",
                                        "group-data-[hover=false]:bg-transparent",
                                        "group-data-[focus=true]:bg-transparent",
                                        "backdrop-blur-sm",
                                        "!cursor-text",
                                    ]
                                }} />
                            <DynamicTextarea
                                label="Опис"
                                labelPlacement="outside"
                                placeholder="Почни писати..."
                                value={diaryEntryValue.description}
                                onChange={(e: any) => setDiaryEntryValue(
                                    {
                                        ...diaryEntryValue,
                                        description: e.target.value
                                    }
                                )}
                                classNames={{
                                    input: [
                                        "placeholder:font-bold",
                                        "placeholder:italic",
                                        "group-data-[hover=true]:bg-transparent",
                                        "group-data-[hover=false]:bg-transparent",
                                        "italic",
                                        "font-medium",
                                    ],
                                    label: [
                                        "font-bold"
                                    ],
                                    inputWrapper: [
                                        "shadow-3xl",
                                        "bg-transparent",
                                        "border-none",
                                        "placeholder:font-medium",
                                        "placeholder:text-slate-400",
                                        "hover:bg-transparent",
                                        "group-data-[hover=true]:bg-transparent",
                                        "group-data-[hover=false]:bg-transparent",
                                        "group-data-[focus=true]:bg-transparent",
                                        "backdrop-blur-sm",
                                        "!cursor-text",
                                    ]
                                }}
                            />
                        </div>
                        <div className='flex justify-end gap-6'>
                            <Button
                                variant="bordered"
                                className='border-teal-800 text-teal-800 w-40'
                                onClick={setDefaultValue}
                            >
                                Відмінити
                            </Button>
                            <Button
                                variant="shadow"
                                className='text-white bg-teal-800 w-40'
                                onClick={sendDiaryEntry}
                            >
                                Зберегти
                            </Button>
                        </div>
                    </div>
                </div>) : null}
                <Button
                    isIconOnly
                    aria-label="Like"
                    variant="bordered"
                    className='border-teal-800 text-teal-800 ml-auto flex'
                    onClick={toggleShowForm}
                >
                    {isShowForm ? <EyeFilledIcon /> : <EyeSlashFilledIcon />}
                </Button>
                <ScrollShadow hideScrollBar className='h-[500px]'>
                    <Card
                        isBlurred
                        className='border-none my-6'
                        shadow='sm'
                    >
                        <CardBody className='p-10'>
                            <h2 className='text-center font-bold mb-14 text-xl'>{user.name}, це твій щоденник успіху</h2>
                            {user.diarySuccess.length ? [...user.diarySuccess].reverse().map((item: DiarySuccessType)  => {
                                return (<Entry key={item._id} title={item.title} date={item.date} description={item.description} />)
                            }) : <p className='text-center'>Поки тут немає жодногу запису, але ти можеш прямо зараз додати</p>}
                        </CardBody>
                    </Card>
                </ScrollShadow>
            </div>
        </div>
    )
}

export default DiarySuccess;