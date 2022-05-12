<template>
    <div class="register-form container">
        <el-form :model="form" label-position="top" label-width="120px">
            <el-form-item label="Email">
                <el-input v-model="form.email" />
            </el-form-item>
            <el-form-item label="Name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Password">
                <el-input type="password" :show-password="true" v-model="form.password" />
            </el-form-item>
            <el-form-item label="Retype Password">
                <el-input type="password" :show-password="true" v-model="form.password" />
            </el-form-item>
            <div class="row">
                <div class="col-4">
                    <el-form-item label="Province" prop="region">
                        <el-select v-model="form.province" placeholder="Activity zone">
                            <el-option label="Zone one" value="2" />
                            <el-option label="Zone two" value="1" />
                        </el-select>
                    </el-form-item>
                </div>
                <div class="col-4">
                    <el-form-item label="District" prop="region">
                        <el-select v-model="form.district" placeholder="Activity zone">
                            <el-option label="Zone one" value="2" />
                            <el-option label="Zone two" value="1" />
                        </el-select>
                    </el-form-item>
                </div>
                <div class="col-4">
                    <el-form-item label="Ward" prop="region">
                        <el-select v-model="form.ward" placeholder="Activity zone">
                            <el-option label="Zone one" value="1" />
                            <el-option label="Zone two" value="2" />
                        </el-select>
                    </el-form-item>
                </div>
                <el-form-item class="register-button">
                    <el-button type="primary" @click="onSubmit">Register</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>
<script lang="ts">
import { IRegisterForm } from '@/common/interfaces';
import { Options, Vue } from 'vue-class-component';
@Options({
    components: {},
})
export default class registerForm extends Vue {
    form: IRegisterForm = {
        name: '',
        email: '',
        password: '',
        password2: '',
        province: undefined,
        district: undefined,
        ward: undefined,
        citizenIdentification: '',
        phoneNumber: '',
        gender: undefined,
    };
}
</script>
<style lang="scss" scoped>
.register-form {
    max-width: 500px;
}

::v-deep .register-button .el-form-item__content {
    justify-content: center;
}
</style>