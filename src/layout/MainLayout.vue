<template>
    <div class="main-layout">
        <el-container>
            <el-header>
                <MainHeader />
            </el-header>
            <el-main>
                <router-view />
            </el-main>
            <!-- <el-footer>
                <MainFooter />
            </el-footer> -->
        </el-container>
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
:deep(.el-header) {
    padding: 0;
}
:deep(.el-footer) {
    padding: 0;
}
</style>
