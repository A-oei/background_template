<template>
    <div class="top-bar">
        <div class="top-bar-logo">
            <span/>
            <span style="{color: #67c23a;background-color: #f56c6c}">background_template平台</span>
        </div>

        <div class="top-bar-user">
            <span class="user-header"/>
            <aoei-dropdown class="user-options" @command="userOperation">
                <div class="user-name">
                    <span>admin</span>
                    <span class="icon iconfont aoei-icon-test69"></span>
                </div>
                <aoei-dropdown-menu slot="dropdown">
                    <span class="user-welcome">欢迎使用</span>
                    <aoei-dropdown-item class="options-change-password" command="change">
                        <span class="icon iconfont aoei-icon-test13"/>
                        <span>修改密码</span>
                    </aoei-dropdown-item>
                    <aoei-dropdown-item class="options-out" command="out">
                        <span class="icon iconfont aoei-icon-test42"/>
                        <span>退出</span>
                    </aoei-dropdown-item>
                </aoei-dropdown-menu>
            </aoei-dropdown>
        </div>

        <!--退出弹窗-->
        <Dialog title="提示" :visible.sync="dialogVisible">
            <span>您确定要退出吗?</span>
            <div slot="footer" class="dialog-footer">
                <aoei-button @click="dialogVisible = false">取 消</aoei-button>
                <aoei-button @click="dialogVisible = false" type="primary" style="margin-left: 30px">确 定</aoei-button>
            </div>
        </Dialog>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'

    @Component({})
    export default class TopBar extends Vue {

        dialogVisible: boolean = false;

        userOperation(e) {
            if (e == 'out') {
                this.dialogVisible = true;
                window.localStorage.removeItem('aoei-token');
                this.$router.replace('/login');
                this.$message({message: '退出成功', type: 'success'});
            }
        }
    }
</script>
<style lang="scss" scoped>
    .top-bar {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .top-bar-logo {
            display: flex;
            align-items: center;
            span {
                &:nth-of-type(1) {
                    width: 100px;
                    height: 22px;
                    background: url("../../../assets/images/top-bar-login.png") no-repeat;
                    background-size: cover;
                }

                &:nth-of-type(2) {
                    padding-left: 20px;
                    font-size: 20px;
                }
            }
        }

        .top-bar-user {
            height: 30px;
            border-left: .5px solid rgba(0, 0, 0, .2);
            display: flex;
            align-items: center;
            .user-header {
                width: 30px;
                height: 30px;
                background: url("../../../assets/images/top-bar-userIcon.png") no-repeat;
                background-size: cover;
                margin-left: 20px;
            }
            .user-options {
                margin: 0 10px 0 15px;
                &::v-deep {
                    .user-name {
                        display: flex;
                        align-items: center;
                        span:nth-of-type(1) {
                            font-size: 10px;
                        }
                    }
                    .user-welcome {
                        line-height: 30px;
                        padding-left: 20px;
                        font-size: 12px;
                        color: #718295;
                    }
                    .options-change-password, .options-out {
                        text-align: left !important;
                        span {
                            color: #161b22;
                            &:nth-of-type(1) {
                                margin-right: 5px;
                            }
                        }
                    }

                }
            }
        }
    }
</style>
