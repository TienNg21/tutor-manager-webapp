<template>
    <div>
        <el-empty description="Verify Page" />
    </div>
</template>

<script lang="ts">
import { verify } from '@/common/service/app.service';
import { appModule } from '@/plugins/vuex/appModule';
import { ElMessage } from 'element-plus';
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class VerifyPage extends Vue {
    async created() {
        try {
            const response = await verify(this.$route.params);
            if (response?.success) {
                ElMessage({
                    type: 'success',
                    message: `Verify email successfully.`,
                });
                const tutor = appModule.loginUser;
                tutor.verified = true;
                appModule.setLoginUser(tutor);
                this.$router.push('/');
            } else {
                ElMessage({
                    type: 'error',
                    message: 'Something went wrong.',
                });
            }
        } catch (error) {
            ElMessage({
                type: 'error',
                message: 'Something went wrong.',
            });
        }
    }
}
</script>