<template>
    <div class="register-form container">
        <el-form v-if="!error" :model="form" label-position="top" label-width="120px">
            <div class="row">
                <div class="col-6">
                    <el-form-item label="Email">
                        <el-input v-model="form.email" />
                    </el-form-item>
                </div>
                <div class="col-6">
                    <el-form-item label="Name">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <el-form-item label="Citizen Identification">
                        <el-input type="text" v-model="form.citizenIdentification" />
                    </el-form-item>
                </div>
                <div class="col-4">
                    <el-form-item label="Phone Number">
                        <el-input type="text" v-model="form.phoneNumber" />
                    </el-form-item>
                </div>
            </div>
            <el-form-item label="Address">
                <div class="row">
                    <div class="col-4">
                        <el-select
                            v-model="form.provinceId"
                            filterable
                            placeholder="Province"
                        >
                            <el-option
                                v-for="province in provinceList"
                                :key="province.id"
                                :label="province.name"
                                :value="province.id"
                            />
                        </el-select>
                    </div>
                    <div class="col-4">
                        <el-select v-model="value" filterable placeholder="District">
                            <el-option
                                v-for="district in districtList"
                                :key="district.id"
                                :label="district.name"
                                :value="district.id"
                            />
                        </el-select>
                    </div>
                    <div class="col-4">
                        <el-select v-model="value" filterable placeholder="Ward">
                            <el-option
                                v-for="ward in wardList"
                                :key="ward.id"
                                :label="ward.name"
                                :value="ward.id"
                            />
                        </el-select>
                    </div>
                </div>
                <el-input type="text" v-model="form.address" />
            </el-form-item>
            <el-form-item label="Gender">
                <div>
                    <el-radio v-model="form.gender" :label="true" size="large"
                        >Man</el-radio
                    >
                    <el-radio v-model="form.gender" :label="false" size="large"
                        >Woman</el-radio
                    >
                </div>
            </el-form-item>
            <el-form-item label="Password">
                <el-input type="password" :show-password="true" v-model="form.password" />
            </el-form-item>
            <el-form-item label="Retype Password">
                <el-input
                    type="password"
                    :show-password="true"
                    v-model="reTypePassword"
                />
            </el-form-item>
            <el-form-item class="register-button">
                <el-button type="primary" @click="onSubmit">Register</el-button>
            </el-form-item>
        </el-form>
        <el-result
            v-else
            icon="error"
            title="Something went wrong!"
            sub-title="Please try again."
        >
            <template #extra>
                <el-button type="primary" @click="returnRegisterPage">Back</el-button>
            </template>
        </el-result>
        <div v-if="loading">Loading ...</div>
    </div>
</template>
<script lang="ts">
import { IRegisterForm } from '@/common/interfaces';
import { register } from '@/common/service/app.service';
import { ElMessage } from 'element-plus';
import { Options, Vue } from 'vue-class-component';
import { registerModule } from '../store';

@Options({
    components: {},
})
export default class registerForm extends Vue {
    reTypePassword = '';
    error = false;
    loading = false;

    loadData() {
        registerModule.getProvinceList();
    }

    created() {
        this.loadData();
    }

    get provinceList() {
        return registerModule.provinceList;
    }

    form: IRegisterForm = {
        name: '',
        email: '',
        password: '',
        address: '',
        citizenIdentification: '',
        phoneNumber: '',
        gender: undefined,
        provinceId: 1,
        districtId: 1,
        wardId: 1,
    };

    async onSubmit() {
        this.loading = true;
        if (this.reTypePassword !== this.form.password) {
            ElMessage({
                type: 'error',
                message: `Password do not match!`,
            });
            this.error = true;
            this.loading = false;
            return;
        }

        const response = await register(this.form);

        console.log(response);

        if (response?.code == 200) {
            ElMessage({
                type: 'success',
                message: `Please check your email.`,
            });
            this.$router.push('/login');
        } else {
            ElMessage({
                type: 'error',
                message: response?.message,
            });
            this.error = true;
        }

        this.loading = false;
    }

    returnRegisterPage() {
        this.error = false;
        this.$router.push('/register');
    }
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