import store from '@/plugins/vuex';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
    name: 'account',
    stateFactory: true,
    dynamic: true,
    namespaced: true,
    store,
})
class AccountModule extends VuexModule {
    isShowUpdateProfileForm = false;
    isShowChangePasswordForm = false;
    isShowChangeEmailForm = false;

    @Action
    setIsShowUpdateProfileForm(value: boolean) {
        this.SET_IS_SHOW_UPDATE_PROFILE_FORM(value);
    }

    @Action
    setIsShowChangePasswordForm(value: boolean) {
        this.SET_IS_SHOW_CHANGE_PASSWORD_FORM(value);
    }

    @Action
    setIsShowChangeEmailForm(value: boolean) {
        this.SET_IS_SHOW_CHANGE_EMAIL_FORM(value);
    }

    @Mutation
    SET_IS_SHOW_UPDATE_PROFILE_FORM(value: boolean) {
        this.isShowUpdateProfileForm = value;
    }

    @Mutation
    SET_IS_SHOW_CHANGE_PASSWORD_FORM(value: boolean) {
        this.isShowChangePasswordForm = value;
    }

    @Mutation
    SET_IS_SHOW_CHANGE_EMAIL_FORM(value: boolean) {
        this.isShowChangeEmailForm = value;
    }
}


export const accountModule = getModule(AccountModule);