<template>
    <div class="container">
        <h1>Login</h1>
        <LoginForm />
    </div>
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
</style>