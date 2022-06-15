import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export async function getProvinceList() {
    try {
        const { data } = await axiosClient.get(`/api/address/province`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getDistrictListByProvinceId(provinceId: number | string) {
    try {
        const { data } = await axiosClient.get(`/api/address/district/${provinceId}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getWardListByDistrictId(districtId: number | string) {
    try {
        const { data } = await axiosClient.get(`/api/address/ward/${districtId}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}