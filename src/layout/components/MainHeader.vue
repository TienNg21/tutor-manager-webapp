<template>
    <el-menu mode="horizontal" class="menu-header">
        <el-menu-item index="1"
            ><router-link to="/">Tutor Mananger</router-link></el-menu-item
        >
        <el-menu-item index="4"
            ><router-link to="/search">Search</router-link></el-menu-item
        >
        <el-menu-item index="2-1"
            ><router-link to="/login">Login</router-link></el-menu-item
        >
        <el-menu-item index="2-2"
            ><router-link to="/register">Register</router-link></el-menu-item
        >
    </el-menu>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class MainHeader extends Vue {}
</script>
<style lang="scss" scoped>
a {
    font-size: 24px;
    color: $color-black;
    text-decoration: none;
}

::v-deep .el-divier {
    margin: 0;
}
</style>
