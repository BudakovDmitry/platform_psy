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
import axios from 'axios';
import {Endpoints} from "@/app/helpers/endpoints";
import {Routes} from "@/app/helpers/routes";
import {useDispatch, useSelector} from "react-redux";
import {login} from "@/app/redux/slices/auth/authSlice";
import {AuthStateType} from "@/app/redux/types/types";
import {redirect} from "next/navigation";

const DynamicInput = dynamic(
    () => import('../components/Forms/Input'),
    { ssr: false }
)

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [loginValue, setLoginValue] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const isAuth = useSelector((state: any) => state.auth.isAuth)

    if(isAuth) {
        redirect(Routes.PLATFORM);
    }

    const loginUser = () => {
        // @ts-ignore
        dispatch(login(loginValue))
    }

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <Card className='w-1/3 px-6 py-12'>
                    <CardBody>
                        <DynamicInput
                            label="Пошта"
                            className='mb-5'
                            isClearable
                            value={loginValue.email}
                            onChange={(e: any) => setLoginValue(
                                {
                                    ...loginValue,
                                    email: e.target.value
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
                            onClick={loginUser}
                        >
                            Увійти
                        </Button>
                        <p className='text-center mb-10 text-slate-600'>або</p>
                        <Button
                            variant="bordered"
                            color="warning"
                            as={Link}
                            href={Routes.REGISTRATION}
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