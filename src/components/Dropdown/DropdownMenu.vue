<template>
    <ul class="el-dropdown-menu" >
        <slot></slot>
    </ul>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class dropdownMenuc extends Vue {

    }
</script>

<style lang="scss" scoped>
    .el-dropdown-menu{
        position: absolute;
        z-index: 2051;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 0;
        margin: 5px 0;
        background-color: #fff;
        border: 1px solid #ebeef5;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        border-radius: 4px;
        min-width: 100px;
    }
</style>
