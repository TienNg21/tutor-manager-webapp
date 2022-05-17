import store from '@/plugins/vuex';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { isEmpty } from 'lodash';
import { ICustomer } from '@/common/interfaces';

@Module({
    name: 'app',
    stateFactory: true,
    dynamic: true,
    namespaced: true,
    store,
})
class AppModule extends VuexModule {
    loginCustomer: ICustomer = {} as ICustomer;

    get isCustomerLogin() {
        return !isEmpty(this.loginCustomer);
    }

    @Action
    setLoginCustomer(customer: ICustomer) {
        this.SET_LOGIN_CUSTOMER(customer);
    }

    @Mutation
    SET_LOGIN_CUSTOMER(customer: ICustomer) {
        this.loginCustomer = customer;
    }
}


export const appModule = getModule(AppModule);