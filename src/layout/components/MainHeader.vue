<template>
    <div class="header">
        <div class="left-wrapper">
            <router-link to="/">Home</router-link>
            <router-link to="/search">Search</router-link>
        </div>
        <div class="right-wrapper">
            <div v-if="!isLoggedIn">
                <router-link to="/login">Login</router-link>
                <router-link to="/register">Register</router-link>
            </div>
            <div v-else>
                <router-link to="/account">Account</router-link>
                <el-button text @click="logout">Logout</el-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import localStorageAuthService from '@/common/authStorage';
import { appModule } from '@/plugins/vuex/appModule';
import { Action, ElMessage, ElMessageBox } from 'element-plus';
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class MainHeader extends Vue {
    get isLoggedIn() {
        return appModule.isCustomerLogin;
    }

    logout() {
        ElMessageBox.alert('Do you want to loggout?', 'Warning !!!', {
            confirmButtonText: 'Confirm',
            callback: (action: Action) => {
                if (action === 'confirm') {
                    ElMessage({
                        type: 'success',
                        message: `Logout`,
                    });
                    localStorageAuthService.resetAll();
                    appModule.setLoginCustomer({});
                    this.$router.push('/');
                }
            },
        });
    }
}
</script>
<style lang="scss" scoped>
a {
    font-size: 24px;
    color: $color-white;
    text-decoration: none;
    padding: 0 30px;
}
.router-link-active.router-link-exact-active {
    color: $color-black;
}
.header {
    background-color: $color-brand;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
</style>
