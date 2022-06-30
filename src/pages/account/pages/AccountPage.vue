<template>
    <div class="row">
        <div class="col-12"></div>
        <div class="col-3">
            <AccountRightBar />
        </div>
        <div class="col-9">
            <router-view />
        </div>
    </div>
    <UpdateProfileForm />
    <ChangePasswordForm />
    <ChangeEmailForm />
</template>
<script lang="ts">
import { appModule } from '@/plugins/vuex/appModule';
import { Options, Vue } from 'vue-class-component';
import AccountRightBar from '../components/AccountRightBar.vue';
import UpdateProfileForm from '../components/account/UpdateProfileForm.vue';
import ChangePasswordForm from '../components/account/ChangePasswordForm.vue';
import ChangeEmailForm from '../components/account/ChangeEmailForm.vue';

@Options({
    components: {
        AccountRightBar,
        UpdateProfileForm,
        ChangeEmailForm,
        ChangePasswordForm,
    },
})
export default class AccountPage extends Vue {
    get tutor() {
        return appModule.loginUser;
    }
}
</script>