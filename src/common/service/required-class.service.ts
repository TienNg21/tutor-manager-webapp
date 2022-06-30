import axios from 'axios';
import { ICreateClassForm, ICreateRequiredClassForm, IGetListQuery, IUpdateRequiredClassForm } from '../interfaces';

const axiosClient = axios.create({
    baseURL: process.env.VUE_APP_BE_URL,
});

export async function getRequiredClasses(query: IGetListQuery) {
    try {
        const { data } = await axiosClient.get(`/api/required-classes`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getRequiredClassByID(id: number | string, query: IGetListQuery) {
    try {
        const { data } = await axiosClient.get(`/api/required-classes/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function createRequiredClass(form: ICreateRequiredClassForm) {
    try {
        const { data } = await axiosClient.post(`/api/required-classes`, form);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateRequiredClass(id: number, form: IUpdateRequiredClassForm) {
    try {
        const { data } = await axiosClient.post(`/api/required-classes/${id}`, form);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteRequiredClass(id: number) {
    try {
        const { data } = await axiosClient.post(`/api/required-classes/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}