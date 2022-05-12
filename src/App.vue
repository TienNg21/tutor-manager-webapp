<template>
    <ElConfigProvider>
        <router-view />
    </ElConfigProvider>
</template>
<script lang="ts">
import { ElConfigProvider } from 'element-plus';
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        ElConfigProvider,
    },
})
export default class App extends Vue {}
</script>
<style lang="scss" scoped>
</style>
