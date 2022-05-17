<template>
    <ElConfigProvider>
        <router-view />
    </ElConfigProvider>
</template>
<script lang="ts">
import { ElConfigProvider } from 'element-plus';
import { Options, Vue } from 'vue-class-component';
import localStorageAuthService from './common/authStorage';
import { ICustomer } from './common/interfaces';
import { appModule } from './plugins/vuex/appModule';

@Options({
    components: {
        ElConfigProvider,
    },
})
export default class App extends Vue {
    created() {
        const customer = localStorageAuthService.getLoginTutor() as ICustomer;
        appModule.setLoginCustomer(customer);
    }
}
</script>
<style lang="scss" scoped>
</style>
