import store from '@/plugins/vuex';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { isEmpty } from 'lodash';
import { IDistrict, IProvince, IWard } from '@/common/interfaces';
import { getProvinceList, getDistrictListByProvinceId, getWardListByDistrictId } from '@/common/service/address.service';

@Module({
    name: 'register',
    stateFactory: true,
    dynamic: true,
    namespaced: true,
    store,
})
class RegisterModule extends VuexModule {
    provinceList: IProvince[] = [];
    districtList: IDistrict[] = [];
    wardList: IWard[] = [];

    @Action
    async getProvinceList() {
        const response = await getProvinceList();
        if (response?.code == 200) {
            this.SET_PROVINCE_LIST(response?.data?.items || []);
        } else {
            this.SET_PROVINCE_LIST([]);
        }
    }

    @Action
    async getDistrictById(id: number) {
        const response = await getDistrictListByProvinceId(id);
        if (response?.code == 200) {
            this.SET_DISTRICT_LIST(response?.data?.items || []);
        } else {
            this.SET_DISTRICT_LIST([]);
        }
    }

    @Action
    async getWardById(id: number) {
        const response = await getWardListByDistrictId(id);
        if (response?.code == 200) {
            this.SET_WARD_LIST(response?.data?.items || []);
        } else {
            this.SET_WARD_LIST([]);
        }
    }

    @Mutation
    SET_PROVINCE_LIST(provinceList: IProvince[]) {
        this.provinceList = provinceList;
    }

    @Mutation
    SET_DISTRICT_LIST(districtList: IDistrict[]) {
        this.districtList = districtList;
    }

    @Mutation
    SET_WARD_LIST(wardList: IWard[]) {
        this.wardList = wardList;
    }
}


export const registerModule = getModule(RegisterModule);