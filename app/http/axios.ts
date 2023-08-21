import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: false,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export default $api;