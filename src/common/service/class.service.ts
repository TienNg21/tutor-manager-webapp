import axios from 'axios';
import { ICreateClassForm } from '../interfaces';

const axiosClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export async function getClasses() {
    try {
        const { data } = await axiosClient.get(`/api/classes`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getClassByID(id: number | string) {
    try {
        const { data } = await axiosClient.get(`/api/classes/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function createClass(form: ICreateClassForm) {
    try {
        const { data } = await axiosClient.post(`/api/classes`, form);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateClass(form: ICreateClassForm) {
    try {
        const { data } = await axiosClient.post(`/api/classes`, form);
        return data;
    } catch (error) {
        console.log(error);
    }
}