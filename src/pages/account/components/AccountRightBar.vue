<template>
    <div class="">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
            <el-sub-menu index="1">
                <template #title>
                    <span>{{ $t('account.rightBar.myAccount.title') }}</span>
                </template>
                <el-menu-item index="1-1" @click="onClickUpdateProfile">{{
                    $t('account.rightBar.myAccount.updateProfile')
                }}</el-menu-item>
                <el-menu-item index="1-2" @click="onClickChangeEmail">{{
                    $t('account.rightBar.myAccount.changeEmail')
                }}</el-menu-item>
                <el-menu-item index="1-3" @click="onClickChangePassword">{{
                    $t('account.rightBar.myAccount.changePassword')
                }}</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="2" @click="onClickClassList">
                <span>{{ $t('account.rightBar.class') }}</span>
            </el-menu-item>
            <el-menu-item index="3" @click="onClickRequiredClass">
                <span>{{ $t('account.rightBar.requiredClass') }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { accountModule } from '../store';

@Options({
    components: {},
})
export default class AccountRightBar extends Vue {
    handleOpen(value: any) {
        console.log(value);
    }

    onClickRequiredClass() {
        this.$router.push('/account/required-class');
    }

    onClickUpdateProfile() {
        this.$router.push('/account');
        accountModule.setIsShowUpdateProfileForm(true);
    }

    onClickChangeEmail() {
        this.$router.push('/account');
        accountModule.setIsShowChangeEmailForm(true);
    }

    onClickChangePassword() {
        this.$router.push('/account');
        accountModule.setIsShowChangePasswordForm(true);
    }

    onClickClassList() {
        this.$router.push('/account/class');
    }
}
</script>
<style lang="scss" scoped>
</style>