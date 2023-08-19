import { AxiosResponse } from "axios";
import { UserType } from "@/app/types/types";
import $api from "@/app/http/axios";
import { Endpoints } from "@/app/helpers/endpoints";

export const fetchUsers = async (): Promise<AxiosResponse<UserType[]>> => {
    return $api.get<UserType[]>(Endpoints.USERS);
}