<template>
    <div class="footer">
        <el-divider />
        <div class="row container">
            <div class="col-6">Thong tin</div>
            <div class="col-6">Lien he</div>
        </div>
        <el-backtop :right="100" :bottom="100" />
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class MainFooter extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
    background-color: $color-brand;
    color: $color-white;
    text-align: center;
}
</style>
