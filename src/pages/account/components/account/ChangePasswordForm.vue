<template>
    <el-dialog
        v-model="isShowChangePasswordForm"
        title="Tips"
        width="30%"
        :before-close="handleClose"
    >
        <span>This is a change password</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                    >Confirm</el-button
                >
            </span>
        </template>
    </el-dialog>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { accountModule } from '../../store';

@Options({
    components: {},
})
export default class ChangePasswordForm extends Vue {
    get isShowChangePasswordForm() {
        return accountModule.isShowChangePasswordForm;
    }

    handleClose() {
        accountModule.setIsShowChangePasswordForm(false);
    }
}
</script>