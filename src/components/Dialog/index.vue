<template>
    <div class="layer-pop" v-show="visible">
        <div class="aoei-dialog"
             :style="{
            width ,
            display:visible?'block':'none'
         }"
             ref="AoeiDialog"
        >
            <div class="el-dialog__header">
                <span>{{title}}</span>
                <i @click="dialogClose">关闭</i>
            </div>
            <div class="el-dialog__body">
                <slot></slot>
            </div>
            <div class="el-dialog__footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>

</template>
<script lang="ts">
    import {Component, Vue, Prop, Watch, Ref} from "vue-property-decorator";

    @Component
    export default class Dialog extends Vue {

        @Prop({type: String, default: '提示'}) title: string;
        @Prop({type: String, default: '30%'}) width: string;
        @Prop({type: Boolean, default: false}) visible: boolean;

        dialogClose() {
            this.$emit('update:visible', false)
        }

        @Watch('visible')
        onVisibleChange(val){
            console.log(val,'val')
        }
    }
</script>
<style lang="scss">
    @import "../../core/style/public";

    .layer-pop{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
    }

    .aoei-dialog {
        position: relative;
        z-index: 999;
        background-color: #fff;
        margin: 15vh auto 50px;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
        box-sizing: border-box;
        .el-dialog__header {
            width: 100%;
            box-sizing: border-box;
            padding: 20px 20px 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
                line-height: 24px;
                font-size: 18px;
                color: $titleFontColor;
            }
            i {
                color: $closeButtonColor;
                font-style: normal;
                cursor: pointer;
                font-size: 14px;
            }
        }
        .el-dialog__body {
            padding: 30px 20px;
            color: $fontInitializedColor;
            font-size: 14px;
            word-break: break-all;
        }
        .el-dialog__footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
        }
    }
</style>
