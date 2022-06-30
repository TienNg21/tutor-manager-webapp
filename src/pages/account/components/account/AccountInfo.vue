<template>
    <el-descriptions title="User Info">
        <el-descriptions-item label="Username">{{ tutor.name }}</el-descriptions-item>
        <el-descriptions-item label="Email">{{ tutor.email }}</el-descriptions-item>
        <el-descriptions-item label="Phone Number">{{
            tutor.phoneNumber
        }}</el-descriptions-item>
        <el-descriptions-item label="Citizen Identification">{{
            tutor.citizenIdentification
        }}</el-descriptions-item>
        <el-descriptions-item label="Gender">
            <el-tag v-if="tutor.gender" size="small">Man</el-tag>
            <el-tag v-else size="small">Woman</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Verify">
            <el-tag v-if="tutor.verified" size="small">Verified</el-tag>
            <el-tag v-else size="small">Unverified</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">{{ tutor.address }}</el-descriptions-item>
    </el-descriptions>
</template>
<script lang="ts">
import { appModule } from '@/plugins/vuex/appModule';
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class AccountInfo extends Vue {
    get tutor() {
        return appModule.loginUser;
    }

    created() {
        console.log(this.tutor);
    }
}
</script>