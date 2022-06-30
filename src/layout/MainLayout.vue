<template>
    <div class="main-layout">
        <MainHeader />
        <div class="container">
            <router-view />
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainFooter from './components/MainFooter.vue';
import MainHeader from './components/MainHeader.vue';

@Options({
    components: {
        MainHeader,
        MainFooter,
    },
})
export default class MainLayout extends Vue {}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 30px;
}
</style>
