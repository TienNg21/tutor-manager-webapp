<template>
    <div class="login-form container">
        <el-form label-position="top" label-width="120px" v-if="!error">
            <el-form-item :label="$t('login.email.label')">
                <el-input
                    name="email"
                    v-model="form.email"
                    :placeholder="$t('login.email.placeholder')"
                />
            </el-form-item>
            <el-form-item :label="$t('login.password.label')">
                <el-input
                    type="password"
                    :show-password="true"
                    name="password"
                    v-model="form.password"
                    :placeholder="$t('login.password.placeholder')"
                />
            </el-form-item>

            <el-form-item class="login-button">
                <el-button type="primary" @click="submitLoginForm">{{
                    $t('login.button.label')
                }}</el-button>
            </el-form-item>
        </el-form>
        <el-result
            v-else
            icon="error"
            title="Something went wrong!"
            sub-title="Please try again."
        >
            <template #extra>
                <el-button type="primary" @click="returnLoginPage">Back</el-button>
            </template>
        </el-result>
    </div>
</template>
<script lang="ts">
import localStorageAuthService from '@/common/authStorage';
import { login } from '@/common/service/app.service';
import { appModule } from '@/plugins/vuex/appModule';
import { ElMessage } from 'element-plus';
import { Options, setup, Vue } from 'vue-class-component';
import { ElLoading } from 'element-plus';

@Options({
    components: {},
})
export default class LoginForm extends Vue {
    form = {
        email: '',
        password: '',
    };

    error = false;

    async submitLoginForm() {
        const loading = ElLoading.service({
            lock: true,
            text: 'Loading',
        });
        const response = await login(this.form);
        loading.close();

        if (response?.code == 200) {
            appModule.setLoginUser(response?.data?.items?.[0] || {});
            localStorageAuthService.setJwtToken(response?.jwt || '');
            localStorageAuthService.setLoginTutor(response?.data || {});
            appModule.setLoginUser(response?.data);

            if (appModule.isUserLogin) {
                ElMessage({
                    type: 'success',
                    message: `You have successfully logged in to your account.`,
                });
                this.$router.push('/');
            }
        } else {
            ElMessage({
                type: 'error',
                message: response.message,
            });
            this.error = true;
        }
    }

    returnLoginPage() {
        this.error = false;
        this.$router.push('/login');
    }
}
</script>
<style lang="scss" scoped>
.login-form {
    max-width: 500px;
}

::v-deep .login-button .el-form-item__content {
    justify-content: center;
}
</style>