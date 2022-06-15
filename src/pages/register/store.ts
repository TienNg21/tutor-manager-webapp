import store from '@/plugins/vuex';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { isEmpty } from 'lodash';
import { ICustomer, IProvince } from '@/common/interfaces';
import { getProvinceList } from '@/common/service/address.service';

@Module({
    name: 'register',
    stateFactory: true,
    dynamic: true,
    namespaced: true,
    store,
})
class RegisterModule extends VuexModule {
    provinceList: IProvince[] = [];

    @Action
    async getProvinceList() {
        const response = await getProvinceList();
        if (response?.code == 200) {
            this.SET_PROVINCE_LIST(response?.data?.items || []);
        } else {
            this.SET_PROVINCE_LIST([]);
        }
    }

    @Mutation
    SET_PROVINCE_LIST(provinceList: IProvince[]) {
        this.provinceList = provinceList;
    }
}


export const registerModule = getModule(RegisterModule);