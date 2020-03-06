<template>
    <li class="el-dropdown-menu-item line-omit"
        :class="{
        'is-disabled':disabled,
        'not-disabled':!disabled
        }"
        :style="{
        borderTop:divided?'1px solid #dcdfe6':'none',
        }"
        @click="menuItemClick">
        <slot></slot>
    </li>
</template>
<script lang="ts">
    import {Component, Vue, Inject, Prop} from "vue-property-decorator";

    @Component
    export default class DropdownItem extends Vue {

        @Prop({default: '', type: String}) command: string;
        @Prop({default: false, type: Boolean}) divided: boolean;
        @Prop({default: false, type: Boolean}) disabled: boolean;

        @Inject() readonly dropdown!: any;

        menuItemClick() {
            if (this.disabled) return;
            this.dropdown.dropdownMenuShow(false, this.command)
        }
    }
</script>
<style lang="scss" scoped>
    .el-dropdown-menu-item {
        line-height: 36px;
        padding: 0 20px;
        text-align: center;
    }

    .not-disabled {
        cursor: pointer;
        &:hover {
            background-color: #ecf5ff;
            color: #66b1ff;
        }
    }

    .is-disabled {
        color: #dcdfe6;
    }
</style>
