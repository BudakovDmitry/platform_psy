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

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [loginValue, setLoginValue] = useState({
        name: '',
        password: '',
    });

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <Card className='w-1/3 px-6 py-12'>
                    <CardBody>
                        <DynamicInput
                            label="Ім'я"
                            className='mb-5'
                            isClearable
                            value={loginValue.name}
                            onChange={(e: any) => setLoginValue(
                                {
                                    ...loginValue,
                                    name: e.target.value
                                }
                            )}
                        />
                        <DynamicInput
                            label="Пароль"
                            className='mb-10'
                            value={loginValue.password}
                            onChange={(e: any) => setLoginValue(
                                {
                                    ...loginValue,
                                    password: e.target.value
                                }
                            )}
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisible ? "text" : "password"}
                        />
                        <Button
                            variant="shadow"
                            color="warning"
                            className='mb-10 text-white'
                        >
                            Увійти
                        </Button>
                        <p className='text-center mb-10 text-slate-600'>або</p>
                        <Button
                            variant="bordered"
                            color="warning"
                            as={Link}
                            href='/register'
                        >
                            Зареєструватись
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default Login;