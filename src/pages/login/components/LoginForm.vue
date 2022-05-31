<template>
    <div class="login-form container">
        <el-form label-position="top" label-width="120px" v-if="!error">
            <el-form-item label="Email">
                <el-input name="email" v-model="form.email" />
            </el-form-item>
            <el-form-item label="Password">
                <el-input
                    type="password"
                    :show-password="true"
                    name="password"
                    v-model="form.password"
                />
            </el-form-item>

            <el-form-item class="login-button">
                <el-button type="primary" @click="submitLoginForm">Login</el-button>
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
        <div v-if="loading">Loading ...</div>
    </div>
</template>
<script lang="ts">
import localStorageAuthService from '@/common/authStorage';
import { login } from '@/common/service/app.service';
import { appModule } from '@/plugins/vuex/appModule';
import { ElMessage } from 'element-plus';
import { Options, setup, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class LoginForm extends Vue {
    form = {
        email: '',
        password: '',
    };

    error = false;
    loading = false;

    async submitLoginForm() {
        this.loading = true;
        const response = await login(this.form);

        if (response?.code == 200) {
            appModule.setLoginCustomer(response?.data?.items?.[0] || {});
            localStorageAuthService.setJwtToken(response?.data?.jwt || '');
            localStorageAuthService.setLoginTutor(response?.data?.tutor || {});
            appModule.setLoginCustomer(response?.data?.tutor);

            if (appModule.isCustomerLogin) {
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
        this.loading = false;
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