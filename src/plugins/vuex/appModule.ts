import store from '@/plugins/vuex';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { isEmpty } from 'lodash';
import { IUser } from '@/common/interfaces';

@Module({
    name: 'app',
    stateFactory: true,
    dynamic: true,
    namespaced: true,
    store,
})
class AppModule extends VuexModule {
    loginUser: IUser = {} as IUser;

    get isUserLogin() {
        return !isEmpty(this.loginUser);
    }

    @Action
    setLoginUser(user: IUser) {
        this.SET_LOGIN_USER(user);
    }

    @Mutation
    SET_LOGIN_USER(user: IUser) {
        this.loginUser = user;
    }
}


export const appModule = getModule(AppModule);