<template>
    <el-card class="box-card">
        <h1>{{ $t('register.title') }}</h1>
        <RegisterForm />
    </el-card>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import RegisterForm from '../components/RegisterForm.vue';
import { registerModule } from '../store';
@Options({
    components: {
        RegisterForm,
    },
})
export default class RegisterPage extends Vue {
    loadData() {
        registerModule.getProvinceList();
    }

    created() {
        this.loadData();
    }
}
</script>
<style lang="scss" scoped>
h1 {
    text-align: center;
}
</style>