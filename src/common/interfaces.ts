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
}

export interface ICustomer {
    id?: number;
    name?: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
    citizenIdentification?: string;
    gender?: boolean;
}

export interface IVerifyParam {
    id?: number;
    uniqueString?: string;
}