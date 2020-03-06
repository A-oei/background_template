<template>
    <div class="aoei-select">
        <div class="aoei-input" @click="dropdownOpen=!dropdownOpen">
            <label>{{label}}</label>
            <div class="aoei-input-wrap">
                <input type="text"
                       :placeholder="placeholder"
                       :value="selectValue"
                       @change="input"
                >
                <div>{{selectLabel}}</div>
                <span class="icon iconfont" :class="dropdownOpen?'aoei-icon-test58':'aoei-icon-test60'"/>
            </div>
        </div>
        <div class="aoei-select-dropdown hide-scroll"
             :style="{
             display:dropdownOpen?'block':'none',
             border:dropdownOpen?'1px solid $borderColor':'none',
             boxShadow:dropdownOpen?'0 2px 12px 0 rgba(0, 0, 0, .1)':'none'
             }">
            <ul class="el-select-dropdown__list">
                <slot/>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop, Model, Provide} from "vue-property-decorator";

    @Component
    export default class FormSelect extends Vue {

        @Model('change', {type: [Number, String]}) selectValue!: number | string;

        @Prop({type: String, default: ''}) label: string;
        @Prop({type: String, default: ''}) placeholder: string;

        @Provide() select = this;

        dropdownOpen: boolean = false;
        selectLabel: string = '';

        slotsAarray: Array = [];

        input(e, l) {
            this.$emit('change', e);
            this.selectLabel = l;
            this.dropdownOpen = false;
        }

        created() {

            this.$slots.default.map(item => {
                this.slotsAarray.push(item.componentOptions.propsData)
            })

            this.slotsAarray.some(item => {
                if (item.value == this.selectValue) this.selectLabel = item.label;
                return item.value == this.selectValue;
            })
        }
    }
</script>
<style lang="scss">
    @import "../../../core/style/public";

    .aoei-select {
        width: 240px;
        position: relative;

        .aoei-input {
            font-size: 14px;
            width: 100%;

            .aoei-input-wrap {
                width: 100%;
                position: relative;
                font-size: 14px;

                > input {
                    display: none;
                }
                > div {
                    width: 100%;
                    height: 40px;
                    box-sizing: border-box;
                    padding: 0 30px 0 15px;
                    background-color: #fff;
                    border-radius: 4px;
                    border: 1px solid $borderColor;
                    color: #606266;
                    line-height: 40px;
                    cursor: pointer;
                }
                > span {
                    height: 100%;
                    line-height: 40px;
                    position: absolute;
                    right: 5px;
                    top: 0;
                    color: #c0c4cc;
                    transition: all .3s;
                }
            }
        }

        .aoei-select-dropdown {
            min-width: 240px;
            transition: height .3s;
            position: absolute;
            max-height: 274px;
            top: 46px;
            left: 0;
            z-index: 2095;
            overflow-y: auto;
            border-radius: 4px;
            background-color: #fff;
            margin: 5px 0;
            .el-select-dropdown__list {
                cursor: pointer;
                width: 100%;
                height: 100%;
                padding: 6px 0;
                box-sizing: border-box;
            }
        }
    }
</style>
