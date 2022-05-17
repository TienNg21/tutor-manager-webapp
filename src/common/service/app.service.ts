import axios from 'axios';
import qs from 'qs';
import { ILoginForm, IRegisterForm, IVerifyParam } from '../interfaces';

const axiosClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export async function login(form: ILoginForm) {
    try {
        const { data } = await axiosClient.post(`/api/tutors/login`, form);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function register(form: IRegisterForm) {
    try {
        const { data } = await axiosClient.post(`/api/tutors/register`, form);
        return data;
    } catch (error) {
        console.log(error);
    }
}


export async function verify(params: IVerifyParam) {
    try {
        const { data } = await axiosClient.get(`/api/tutors/verify/${params.id}/${params.uniqueString}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}