import {AxiosResponse} from "axios";
import { AuthResponse } from "@/app/types/types";
import $api from "@/app/http/axios";
import {Endpoints} from "@/app/helpers/endpoints";

export const login = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>(Endpoints.AUTH_LOGIN, { email, password });
}

export const registration = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>(Endpoints.AUTH_REGISTRATION, { email, password });
}

export const logout = async (): Promise<void> => {
    return $api.post(Endpoints.AUTH_LOGOUT);
}