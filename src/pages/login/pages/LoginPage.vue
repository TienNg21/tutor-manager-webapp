<template>
    <el-card class="box-card">
        <h1>{{ $t('login.title') }}</h1>
        <LoginForm />
    </el-card>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LoginForm from '../components/LoginForm.vue';
@Options({
    components: {
        LoginForm,
    },
})
export default class LoginPage extends Vue {}
</script>
<style lang="scss" scoped>
h1 {
    text-align: center;
}

.box-card {
    margin-top: 30px;
}
</style>