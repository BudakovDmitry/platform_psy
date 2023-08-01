'use client'

import { Input } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { UserIcon } from "../components/UserIcon";
import { useState } from "react";
import { EyeFilledIcon } from "../components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";
import Link from 'next/link'

import dynamic from 'next/dynamic'

const DynamicInput = dynamic(
    () => import('../components/Input'),
    { ssr: false }
)

const Register = () => {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isVisibleRepeatPassword, setIsVisibleRepeatPassword] = useState(false);
    const [registerValue, setRegisterValue] = useState({
        name: '',
        phone: '',
        password: '',
        repeatPassword: '',
    });

    const toggleVisibilityPassword = () => setIsVisiblePassword(!isVisiblePassword);
    const toggleVisibilityRepeatPassword = () => setIsVisibleRepeatPassword(!isVisibleRepeatPassword);

    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <Card className='w-1/3 px-6 py-12'>
                    <CardBody>
                        <DynamicInput
                            label="Ім'я"
                            className='mb-5'
                            isClearable
                            value={registerValue.name}
                            onChange={(e: any) => setRegisterValue(
                                {
                                    ...registerValue,
                                    name: e.target.value
                                }
                            )}
                        />
                        <DynamicInput
                            label="Телефон"
                            className='mb-5'
                            isClearable
                            value={registerValue.phone}
                            onChange={(e: any) => setRegisterValue(
                                {
                                    ...registerValue,
                                    phone: e.target.value
                                }
                            )}
                        />
                        <DynamicInput
                            label="Пароль"
                            className='mb-5'
                            value={registerValue.password}
                            onChange={(e: any) => setRegisterValue(
                                {
                                    ...registerValue,
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
                            value={registerValue.repeatPassword}
                            onChange={(e: any) => setRegisterValue(
                                {
                                    ...registerValue,
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
                        >
                            Зареєструватись
                        </Button>
                        <p className='text-center mb-10 text-slate-600'>або</p>
                        <Button
                            variant="bordered"
                            color="warning"
                            as={Link}
                            href='/login'
                        >
                            Вхід
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default Register;