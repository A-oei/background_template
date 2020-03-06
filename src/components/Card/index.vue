<template>
    <div class="aoei-card">
        <div class="card-header">
            <slot name="header"/>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    export default class AoeiCard extends Vue {

    }
</script>
<style lang="scss" scoped>
    @import "../../core/style/public";

    .aoei-card {
        box-shadow: $boxShadowColor;
        padding: 20px;
        color: $titleFontColor;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        transition: .3s;
    }
</style>
