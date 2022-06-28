<template>
    <ElConfigProvider :locale="locale">
        <router-view />
    </ElConfigProvider>
</template>
<script lang="ts">
import { ElConfigProvider } from 'element-plus';
import { Options, Vue } from 'vue-class-component';
import localStorageAuthService from './common/authStorage';
import { IUser } from './common/interfaces';
import { appModule } from './plugins/vuex/appModule';
import vi from '@/plugins/vue-i18n/';

@Options({
    components: {
        ElConfigProvider,
    },
})
export default class App extends Vue {
    locale = vi;

    created() {
        const customer = localStorageAuthService.getLoginTutor() as IUser;
        appModule.setLoginUser(customer);
    }
}
</script>
<style lang="scss" scoped>
</style>
