import { number } from "@intlify/core-base";
import { string } from "yup";

export interface ILoginForm {
    email: string;
    password: string;
}

export interface IRegisterForm {
    name: string,
    email: string,
    password: string,
    citizenIdentification: string,
    phoneNumber: string,
    gender: boolean | undefined,
    address: string,
    provinceId: number | undefined,
    districtId: number | undefined,
    wardId: number | undefined
}

export interface IUser {
    id?: number;
    name?: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
    citizenIdentification?: string;
    gender?: boolean;
    verified?: boolean;
}

export interface IVerifyParam {
    id?: number;
    uniqueString?: string;
}

export interface IProvince {
    id?: number,
    name?: string
}

export interface IDistrict {
    id?: number,
    name?: string
}

export interface IWard {
    id?: number,
    name?: string
}

export interface ICreateClassForm {
    requiredClassId: number,
    salary: number,
    studentId: number,
}

export interface ICreateRequiredClassForm {
    grade: number,
    subject: string,
    minSalary: number,
    maxSalary: number,
    province: number,
    district: number,
    ward: number,
}

export interface IUpdateRequiredClassForm {
    grade?: number,
    subject?: string,
    minSalary?: number,
    maxSalary?: number,
    province?: number,
    district?: number,
    ward?: number,
}

export interface IGetListQuery {
    pagination?: IPagination,

}

export interface IPagination {
    limit?: number,
    page?: number,
}