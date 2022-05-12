import axios from 'axios';
import { ILoginForm } from '../interfaces';

const axiosClient = axios.create({
    // baseURL: 'https://tutors-manager.herokuapp.com'
    baseURL: 'http://localhost:3000'
});

export async function login(form: ILoginForm) {
    try {

        const { data } = await axiosClient.post(`/api/tutors/login`, form);
        return data;
    } catch (error) {
        console.log(error);

    }
}