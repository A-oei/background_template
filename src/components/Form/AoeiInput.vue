/**
* @Author:caofei
* @date:2019/12/4
* @Description: 封装input插件
*/
<template>
    <div class="aoei-form-input aoei-form-item">
        <label v-if="label">{{label}}</label>
        <div class="form-input-wrap">
            <slot name="formIcon"/>

            <input
                    v-validator="validatorFn"
                    :type="type"
                    :placeholder="placeholder"
                    :style="{borderColor:moonError!='success'?'#f56c6c':''}"
                    v-on="inputListeners"
                    :value="textField"/>
            <!--@input="$emit('input', $event.target.value)"-->
        </div>
        <span class="aoei-moon-error">{{moonError}}</span>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop, Watch, Model} from 'vue-property-decorator';


    @Component({
        computed: {
            inputListeners() {
                let vm = this;
                return Object.assign({},
                    this.$listeners,
                    {
                        input(e) {
                            vm.$emit('input', e.target.value)
                        }
                    }
                )
            }
        }
    })
    export default class formInput extends Vue {

        @Model('input', {type: String}) textField!: string;

        moonError: string = '';

        @Prop({type: String, default: 'text'}) type: string;
        @Prop({type: String, default: ''}) label: string;
        @Prop(String) placeholder: string;
        @Prop(Object) check: object;
        @Prop([String, Number]) textField: string | number;

        validatorFn(data) {
            if (!this.check) return;

            let validator: any = this.check['validator'];
            let moonError: string = validator(data);
            if (moonError != 'success') {
                this.moonError = validator(data);
            }
            if (moonError == 'success') {
                this.moonError = '';
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../core/style/public";

    .aoei-form-input {
        .form-input-wrap {
            position: relative;
            height: 100%;
            > input {
                 border-radius: 4px;
                 background-color: #fff;
                 border: 1px solid $borderColor;
                 height: 100%;
                 padding: 0 15px;
                 width: 100%;
                 &:focus {
                     border: 1px solid $focusColor;
                 }
             }
        }
        .aoei-moon-error {
            width: 100%;
            height: 25px;
            position: absolute;
            top: 100%;
            left: 0;
            color: $errorColor;
            font-size: 12px;
            line-height: 1;
            padding-top: 4px;
        }
    }
</style>
