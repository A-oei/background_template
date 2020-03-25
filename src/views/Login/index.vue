<template>
    <div class="background-login">
        <div class="background-login-form">
            <div class="login-form-title"/>
            <div class="login-form-wrap">
                <div class="form-wrap-input">
                    <h3>用户登录</h3>
                    <aoei-form ref="aoeiForm" :rules="rules">
                        <form-input :check='rules.username'
                                    placeholder="请输入用户名" v-model="username">
                            <template #formIcon>
                                <i/>
                            </template>
                        </form-input>
                        <form-input type='password' placeholder="请输入密码" v-model="password">
                            <template #formIcon>
                                <i/>
                            </template>
                        </form-input>
                    </aoei-form>
                    <aoei-button type="primary" class="login-form-button" @click="login">
                        登录
                    </aoei-button>
                </div>
            </div>
            <h3 class="footer-places">Aoei | 后台管理系统模板</h3>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import services from '@/services/login';
    import rules from "@/core/utils/rules/index";
    import {RequestErrorInfo, RequestSuccessInfo} from '@/core/utils/type/interface'

    @Component({})
    export default class Login extends Vue {
        username: string = '';
        password: string = '';
        rules: object = {
            username: {
                validator: rules.account
            }
        }

        login() {
            this.$refs['aoeiForm'].validate((valid: string) => {

                if (valid) {
                    services.login({username: this.username, password: this.password})
                        .then((res: RequestSuccessInfo) => {
                            window.localStorage.setItem('aoei-token', res.accessToken);
                            this.$message({message: `登录成功，${res.username} 欢迎回来`, type: 'success'});
                            this.$store.commit('set_user_info', res);
                            this.$router.push('/');
                        })
                        .catch((err: RequestErrorInfo) => {
                            this.$message({message: err.message, type: 'error'});
                        })
                } else {
                    this.$message({message: '参数校验不通过，请检查后重试', type: 'error'});
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    @import "login";
</style>
