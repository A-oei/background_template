<template>
    <li :value="value" @click="click(value,label)" class="el-select-dropdown__item line-omit" :class="{selected}">
        {{label}}
    </li>
</template>
<script lang="ts">
    import {Component, Vue, Prop, Inject} from "vue-property-decorator";

    @Component({})
    export default class FormOption extends Vue {

        @Prop({type: [String, Number], default: ''}) value: string | number;
        @Prop({type: [String, Number], default: ''}) label: string | number;
        @Prop({type: [String], default: '1'}) label: string;

        @Inject() readonly select: any;

        selected: boolean = false;

        click(v, l) {
            this.select.input(v, l);
        }
    }
</script>
<style lang="scss">

    @import "../../../core/style/public";

    .el-select-dropdown__item {
        width: 100%;
        height: 34px;
        box-sizing: border-box;
        padding: 0 20px;
        position: relative;
        color: $fontInitializedColor;
        line-height: 34px;
        cursor: pointer;
        font-size: 14px;

        &:hover {
            background-color: $hoverBackgroundColor;
        }

        &.selected {
            color: $focusColor;
            font-weight: 700;
        }
    }
</style>
