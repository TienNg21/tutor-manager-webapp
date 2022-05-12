<template>
    <div class="container">
        <h1>Register</h1>
        <RegisterForm />
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import RegisterForm from '../components/RegisterForm.vue';
@Options({
    components: {
        RegisterForm,
    },
})
export default class RegisterPage extends Vue {}
</script>
<style lang="scss" scoped>
h1 {
    text-align: center;
}
</style>