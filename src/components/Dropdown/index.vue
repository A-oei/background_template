<template>
    <div class="aoei-dropdown text-not-selected">
        <div class="dropdown-header" @click="menuShow=!menuShow">
            <slot></slot>
        </div>
        <div class="aoei-dropdown-menu" v-show="menuShow">
            <slot name="dropdown"></slot>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Provide} from 'vue-property-decorator';

    @Component
    export default class Dropdown extends Vue {
        menuShow: boolean = false;

        @Provide() dropdown = this;

        dropdownMenuShow(isShow: boolean, command: string) {
            this.menuShow = isShow;
            this.$emit('command', command);
        }
    }
</script>
<style lang="scss">
    @import "../../core/style/public";

    .aoei-dropdown {
        display: inline-block;
        position: relative;
        color: $fontInitializedColor;
        cursor: pointer;
    }
</style>
