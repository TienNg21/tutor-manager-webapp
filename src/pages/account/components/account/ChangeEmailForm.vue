<template>
    <el-dialog
        v-model="isShowChangeEmailForm"
        title="Tips"
        width="30%"
        :before-close="handleClose"
    >
        <span>This is a change Email</span>
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
export default class ChangeEmailForm extends Vue {
    get isShowChangeEmailForm() {
        return accountModule.isShowChangeEmailForm;
    }

    handleClose() {
        accountModule.setIsShowChangeEmailForm(false);
    }
}
</script>