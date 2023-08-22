'use client'

import { Card, CardBody } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import {useEffect, useState} from "react";
import { EyeFilledIcon } from "../components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";
import Link from 'next/link';
import dynamic from 'next/dynamic'
import {Endpoints} from "@/app/helpers/endpoints";
import {Routes} from "@/app/helpers/routes";
import $api from "@/app/http/axios";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const DynamicInput = dynamic(
    () => import('../components/Forms/Input'),
    { ssr: false }
)

const Registration = () => {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isVisibleRepeatPassword, setIsVisibleRepeatPassword] = useState(false);
    const [registrationValue, setRegistrationValue] = useState({
        email: '',
        name: '',
        phoneNumber: '',
        password: '',
        repeatPassword: '',
    });

    const registrationUser = () => {
        $api.post(Endpoints.AUTH_REGISTRATION, registrationValue)
            .then((response) => {
                console.log(response);
                if(response.status === 200) {
                    toast.success('Реєстрація успішна, підтвердіть реєстрацію по посиланню з пошти', {
                        onClose: () => redirect(Routes.LOGIN)
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const toggleVisibilityPassword = () => setIsVisiblePassword(!isVisiblePassword);
    const toggleVisibilityRepeatPassword = () => setIsVisibleRepeatPassword(!isVisibleRepeatPassword);

    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <Card className='w-1/3 px-6 py-12'>
                    <CardBody>
                        <DynamicInput
                            label="Пошта"
                            className='mb-5'
                            isClearable
                            value={registrationValue.email}
                            onChange={(e: any) => setRegistrationValue(
                                {
                                    ...registrationValue,
                                    email: e.target.value
                                }
                            )}
                        />
                        <DynamicInput
                            label="Ім'я"
                            className='mb-5'
                            isClearable
                            value={registrationValue.name}
                            onChange={(e: any) => setRegistrationValue(
                                {
                                    ...registrationValue,
                                    name: e.target.value
                                }
                            )}
                        />
                        <DynamicInput
                            label="Телефон"
                            className='mb-5'
                            isClearable
                            value={registrationValue.phoneNumber}
                            onChange={(e: any) => setRegistrationValue(
                                {
                                    ...registrationValue,
                                    phoneNumber: e.target.value
                                }
                            )}
                        />
                        <DynamicInput
                            label="Пароль"
                            className='mb-5'
                            value={registrationValue.password}
                            onChange={(e: any) => setRegistrationValue(
                                {
                                    ...registrationValue,
                                    password: e.target.value
                                }
                            )}
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibilityPassword}>
                                    {isVisiblePassword ? (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisiblePassword ? "text" : "password"}
                        />
                        <DynamicInput
                            label="Повторіть пароль"
                            className='mb-10'
                            value={registrationValue.repeatPassword}
                            onChange={(e: any) => setRegistrationValue(
                                {
                                    ...registrationValue,
                                    repeatPassword: e.target.value
                                }
                            )}
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibilityRepeatPassword}>
                                    {isVisibleRepeatPassword ? (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisibleRepeatPassword ? "text" : "password"}
                        />
                        <Button
                            variant="shadow"
                            color="warning"
                            className='mb-10 text-white'
                            onClick={registrationUser}
                        >
                            Зареєструватись
                        </Button>
                        <p className='text-center mb-10 text-slate-600'>або</p>
                        <Button
                            variant="bordered"
                            color="warning"
                            as={Link}
                            href={Routes.LOGIN}
                        >
                            Вхід
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default Registration;