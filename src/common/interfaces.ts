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
    provinceId: number,
    districtId: number,
    wardId: number
}

export interface ICustomer {
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