'use client'

import Image from "next/image";
import {Card, CardBody} from "@nextui-org/react";
import bgImage from '@/public/diary_bg_3.jpg'
import {Button} from "@nextui-org/button";
import {useState} from "react";
import dynamic from "next/dynamic";
import {EyeFilledIcon} from "@nextui-org/shared-icons";
import {EyeSlashFilledIcon} from "@/app/components/EyeSlashFilledIcon";
import Entry from "@/app/components/Entry/Entry";

const DynamicInput = dynamic(
    () => import('@/app/components/Forms/Input'),
    { ssr: false }
)

const DynamicTextarea = dynamic(
    () => import('@/app/components/Forms/Textarea'),
    { ssr: false }
)

const diaryEntries = [
    {
        id: 0,
        title: 'What is Lorem Ipsum?',
        date: "2023-08-04",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        id: 1,
        title: '1914 translation by H. Rackham',
        date: "2023-08-04",
        description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
    },
    {
        id: 2,
        title: 'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
        date: "2023-08-04",
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
    },
    {
        id: 3,
        title: 'The standard Lorem Ipsum passage, used since the 1500s',
        date: "2023-08-04",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 4,
        title: 'Where does it come from?',
        date: "2023-08-04",
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
    },
    {
        id: 5,
        title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        date: "2023-08-04",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis, lacus sit amet iaculis vehicula, nisl eros dapibus arcu, eget ornare massa erat eu erat. In nunc quam, ullamcorper at porttitor sed, porttitor id ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tempus est aliquam augue maximus, id tincidunt nulla pharetra. Phasellus vel egestas arcu. Sed non ante elit. Sed ac ex non magna tempus commodo in a nunc. Proin rhoncus tristique eleifend. Proin imperdiet tristique justo vel molestie.\n' +
            '\n' +
            'Aenean vehicula leo massa, at finibus nunc luctus posuere. Suspendisse sit amet nulla felis. Nullam sed elit ut lacus faucibus tincidunt. Maecenas neque enim, efficitur ut maximus sed, ultrices non sem. Praesent quis tincidunt urna. Cras vitae ipsum justo. Nunc rhoncus ipsum turpis, a aliquet elit cursus nec. Donec erat nisi, aliquam semper libero non, interdum vulputate nisl.'
    },
]

const DiarySuccess = () => {
    const [isShowForm, setIsShowForm] = useState(true)
    const [diaryEntryValue, setDiaryEntryValue] = useState({
        date: '',
        title: '',
        description: '',
    });

    const sendDiaryEntry = () => {
        console.log('diaryEntryValue', diaryEntryValue)
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
                        <h1 className='text-center font-bold'>{`${diaryEntries.length ? 'Продовжи' : 'Почни'} заповнювати свій щоденник`}</h1>
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
                <Card
                    isBlurred
                    className='border-none my-6'
                    shadow='sm'
                >
                    <CardBody className='p-10'>
                        <h2 className='text-center font-bold mb-14 text-xl'>Name, це твій щоденник успіху</h2>
                        {diaryEntries.length ? diaryEntries.map(item => {
                            return (<Entry key={item.id} title={item.title} date={item.date} description={item.description} />)
                        }) : <p className='text-center'>Поки тут немає жодногу запису, але ти можеш прямо зараз додати</p>}
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default DiarySuccess;