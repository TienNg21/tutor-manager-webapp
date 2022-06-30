<template>
    <div class="header">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="left-wrapper">
                <router-link to="/">{{ $t('home.dashBoard') }}</router-link>
                <router-link class="p-3" to="/search">{{
                    $t('home.search')
                }}</router-link>
            </div>
            <div class="right-wrapper">
                <div v-if="!isLoggedIn">
                    <el-button round @click="onClickLoginButton">{{
                        $t('home.login')
                    }}</el-button>
                    <el-button round type="primary" @click="onClickRegisterButton">{{
                        $t('home.register')
                    }}</el-button>
                </div>
                <div v-else>
                    <el-dropdown>
                        <span class="el-dropdown-link align-items-center">
                            {{ $t('home.myAccount') }}
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>
                                    <el-button @click="this.$router.push('/account')">{{
                                        $t('home.myAccount')
                                    }}</el-button>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <el-button
                                        @click="this.$router.push('/account/class')"
                                        >{{ $t('home.class') }}</el-button
                                    >
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <el-button
                                        @click="
                                            this.$router.push('/account/required-class')
                                        "
                                        >{{ $t('home.requiredClass') }}</el-button
                                    >
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <el-button plain @click="logout">Logout</el-button>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
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
        return appModule.isUserLogin;
    }

    onClickLoginButton() {
        this.$router.push('/login');
    }

    onClickRegisterButton() {
        this.$router.push('/register');
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
                    appModule.setLoginUser({});
                    this.$router.push('/');
                }
            },
        });
    }
}
</script>
<style lang="scss" scoped>
.header {
    color: $color-white;
    width: 100%;
    font-size: 16px;
    height: 50px;
    background-color: $color-brand;
    a {
        color: $color-white;
        text-decoration: none;
    }

    .container {
        height: 100%;
    }
}

.el-dropdown {
    height: 24px;
    color: $color-white;
    font-size: 16px;
    align-items: center;
}
</style>
