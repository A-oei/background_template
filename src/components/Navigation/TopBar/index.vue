<template>
    <div class="top-bar">
        <div class="top-bar-logo">
            <span/>
            <span style="{color: #67c23a;background-color: #f56c6c}">background_template平台</span>
        </div>

        <!--<aoei-select v-model="selected" label="select">-->
        <!--<AoeiOptgroup label="456">-->
        <!--<aoei-option label="1" value="1"/>-->
        <!--</AoeiOptgroup>-->
        <!--<aoei-option label="2" value="2">-->
        <!--<span>789</span>-->
        <!--</aoei-option>-->
        <!--<aoei-option label="3" value="3" :disabled="true"/>-->
        <!--</aoei-select>-->

        <div class="top-bar-user">
            <span/>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'

    @Component({})
    export default class TopBar extends Vue {

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
            span {
                &:nth-of-type(1) {
                    width: 30px;
                    height: 30px;
                    background: url("../../../assets/images/top-bar-userIcon.png") no-repeat;
                    background-size: cover;
                    margin-left: 20px;
                }
                &:nth-of-type(2) {
                    padding-left: 10px;
                }

            }
        }
    }
</style>
