<template>
    <div class="login-form container">
        <el-form label-position="top" label-width="120px">
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
    </div>
</template>
<script lang="ts">
import { login } from '@/common/service/app.service';
import { Options, setup, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class LoginForm extends Vue {
    form = {
        email: '',
        password: '',
    };
    async submitLoginForm() {
        const response = await login(this.form);
        if (response) {
            this.$router.push('/');
        } else {
            console.log('error');
        }
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