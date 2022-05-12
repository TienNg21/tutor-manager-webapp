export interface ILoginForm {
    email: string;
    password: string;
}

export interface IRegisterForm {
    name: string,
    email: string,
    password: string,
    password2?: string,
    citizenIdentification: string,
    phoneNumber: string,
    gender: boolean | undefined,
    province: number | undefined,
    district: number | undefined,
    ward: number | undefined,
}