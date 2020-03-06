/**
* @Author:caofei
* @date:2019/12/10
* @Description:按钮组件
*/

<template>
    <button
            class="aoei-button"
            :class="{
                [type]:type,
                'is-disabled':disabled
            }"
            :disabled="disabled"
            v-on="buttonListeners">
        <div class="button-loading" v-if="loading">
            <AoeiLoading></AoeiLoading>
        </div>
        <slot></slot>
    </button>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import AoeiLoading from '@/components/Loading/index'

    @Component({
        components: {
            AoeiLoading
        },
        computed: {
            loadingStatus() {
                if (typeof this.loading == 'boolean') return this.loading;

                if (this.loading == 'true') return true;

                return false;
            },
            buttonListeners() {
                let vm = this;
                return Object.assign({},
                    this.$listeners,
                    {
                        click(e) {
                            vm.$emit('click', e)
                        }
                    }
                )
            }
        },
    })
    export default class AoeiButton extends Vue {

        @Prop(String) type: string;
        @Prop({type: Boolean, default: false}) loading: boolean;
        @Prop({type: [Boolean, String], default: false}) disabled: string | boolean;


    }

</script>

<style lang="scss" scoped>
    .button-loading {
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }

    .aoei-button {
        display: inline-block;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        cursor: pointer;
        box-sizing: border-box;
        outline: none;
        padding: 12px 20px;
        border-radius: 4px;
        font-size: 14px;
        line-height: 1;
        background-color: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        &:hover {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
        &.is-disabled {
            color: #c0c4cc;
            background-color: #fff;
            border-color: #ebeef5;
        }
    }

    .primary {
        color: #ffffff;
        background-color: #409eff;
        border: 1px solid #409eff;
        &:hover {
            color: #ffffff;
            background-color: #66b1ff;
            border-color: #66b1ff;
        }
        &.is-disabled {
            color: #ffffff;
            background-color: #a0cfff;
            border-color: #a0cfff;
        }
    }

    .success {
        color: #ffffff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover {
            color: #ffffff;
            background-color: #85ce61;
            border-color: #85ce61;
        }
        &.is-disabled {
            color: #ffffff;
            background-color: #b3e19d;
            border-color: #b3e19d;
        }
    }

    .info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover {
            color: #ffffff;
            background-color: #a6a9ad;
            border-color: #a6a9ad;
        }
        &.is-disabled {
            color: #fff;
            background-color: #c8c9cc;
            border-color: #c8c9cc;
        }
    }

    .warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover {
            color: #ffffff;
            background-color: #ebb563;
            border-color: #ebb563;
        }
        &.is-disabled {
            color: #ffffff;
            background-color: #f3d19e;
            border-color: #f3d19e;
        }
    }

    .danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover {
            color: #ffffff;
            background-color: #f78989;
            border-color: #f78989;
        }
        &.is-disabled {
            color: #ffffff;
            background-color: #fab6b6;
            border-color: #fab6b6;
        }
    }

    .text {
        border-color: transparent;
        color: #409eff;
        background-color: transparent;
        padding: 9px 0;
        &:hover {
            color: #66b1ff;
            border-color: transparent;
            background-color: transparent;
        }
        &.is-disabled {
            color: #c0c4cc;
            border-color: transparent;
            background-color: transparent;
        }
    }

    .is-disabled {
        cursor: not-allowed;
    }

</style>
