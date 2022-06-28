<template>
    <div class="register-form container">
        <el-form v-if="!error" :model="form" label-position="top" label-width="120px">
            <div class="row">
                <div class="col-6">
                    <el-form-item :label="$t('register.email.label')">
                        <el-input
                            :placeholder="$t('register.email.placeholder')"
                            v-model="form.email"
                        />
                    </el-form-item>
                </div>
                <div class="col-6">
                    <el-form-item :label="$t('register.name.label')">
                        <el-input
                            :placeholder="$t('register.name.placeholder')"
                            v-model="form.name"
                        />
                    </el-form-item>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <el-form-item :label="$t('register.citizenIdentification.label')">
                        <el-input
                            type="text"
                            :placeholder="
                                $t('register.citizenIdentification.placeholder')
                            "
                            v-model="form.citizenIdentification"
                        />
                    </el-form-item>
                </div>
                <div class="col-4">
                    <el-form-item :label="$t('register.phoneNumber.label')">
                        <el-input
                            type="text"
                            :placeholder="$t('register.phoneNumber.placeholder')"
                            v-model="form.phoneNumber"
                        />
                    </el-form-item>
                </div>
            </div>
            <el-form-item :label="$t('register.address.label')">
                <div class="row">
                    <div class="col-4">
                        <el-select
                            v-model="form.provinceId"
                            filterable
                            :placeholder="$t('register.address.province')"
                            @change="onChangeProvince"
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
                        <el-select
                            v-model="form.districtId"
                            filterable
                            :placeholder="$t('register.address.district')"
                            @change="onChangeDistrict"
                        >
                            <el-option
                                v-for="district in districtList"
                                :key="district.id"
                                :label="district.name"
                                :value="district.id"
                            />
                        </el-select>
                    </div>
                    <div class="col-4">
                        <el-select
                            v-model="form.wardId"
                            :placeholder="$t('register.address.ward')"
                            filterable
                        >
                            <el-option
                                v-for="ward in wardList"
                                :key="ward.id"
                                :label="ward.name"
                                :value="ward.id"
                            />
                        </el-select>
                    </div>
                </div>
                <el-input
                    type="text"
                    v-model="form.address"
                    class="address-detail"
                    :placeholder="$t('register.address.address')"
                />
            </el-form-item>
            <el-form-item :label="$t('register.gender.label')">
                <div>
                    <el-radio v-model="form.gender" :label="true" size="large"
                        >Man</el-radio
                    >
                    <el-radio v-model="form.gender" :label="false" size="large"
                        >Woman</el-radio
                    >
                </div>
            </el-form-item>
            <el-form-item :label="$t('register.password.label')">
                <el-input
                    type="password"
                    :placeholder="$t('register.password.placeholder')"
                    :show-password="true"
                    v-model="form.password"
                />
            </el-form-item>
            <el-form-item :label="$t('register.confirmPassword.label')">
                <el-input
                    type="password"
                    :placeholder="$t('register.confirmPassword.placeholder')"
                    :show-password="true"
                    v-model="reTypePassword"
                />
            </el-form-item>
            <el-form-item class="register-button">
                <el-button type="primary" @click="onSubmit">{{
                    $t('register.button.label')
                }}</el-button>
            </el-form-item>
        </el-form>
        <el-result
            v-else
            icon="error"
            :title="$t('register.error.title')"
            :sub-title="$t('register.error.subTitle')"
        >
            <template #extra>
                <el-button type="primary" @click="returnRegisterPage">{{
                    $t('register.error.back')
                }}</el-button>
            </template>
        </el-result>
    </div>
</template>
<script lang="ts">
import { IRegisterForm } from '@/common/interfaces';
import { register } from '@/common/service/app.service';
import { ElMessage } from 'element-plus';
import { Options, Vue } from 'vue-class-component';
import { registerModule } from '../store';
import { ElLoading } from 'element-plus';

@Options({
    components: {},
})
export default class registerForm extends Vue {
    reTypePassword = '';
    error = false;

    loadData() {
        registerModule.getProvinceList();
    }

    created() {
        this.loadData();
    }

    get provinceList() {
        return registerModule.provinceList;
    }

    get districtList() {
        return registerModule.districtList;
    }

    get wardList() {
        return registerModule.wardList;
    }

    onChangeProvince(value: number) {
        registerModule.getDistrictById(value);
    }

    onChangeDistrict(value: number) {
        registerModule.getWardById(value);
    }

    form: IRegisterForm = {
        name: '',
        email: '',
        password: '',
        address: '',
        citizenIdentification: '',
        phoneNumber: '',
        gender: undefined,
        provinceId: undefined,
        districtId: undefined,
        wardId: undefined,
    };

    async onSubmit() {
        if (this.reTypePassword !== this.form.password) {
            ElMessage({
                type: 'error',
                message: this.$t('register.error.passwordNotMatch'),
            });
            this.error = true;
            return;
        }
        const loading = ElLoading.service({
            lock: true,
            text: this.$t('register.message.loading'),
        });
        const response = await register(this.form);
        loading.close();
        if (response?.code == 200) {
            ElMessage({
                type: 'success',
                message: this.$t('register.message.checkEmail'),
            });
            this.$router.push('/login');
        } else {
            ElMessage({
                type: 'error',
                message: response?.message,
            });
            this.error = true;
        }
    }

    returnRegisterPage() {
        this.error = false;
        this.$router.push('/register');
    }
}
</script>
<style lang="scss" scoped>
.register-form {
    max-width: 600px;
}

.address-detail {
    margin-top: 10px;
}

:deep(.el-form-item__label) {
    font-weight: 600;
}

::v-deep .register-button .el-form-item__content {
    justify-content: center;
}
</style>