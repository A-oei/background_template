<template>
    <ul class="el-dropdown-menu">
        <li>12</li>
        <slot></slot>
    </ul>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class dropdownMenuc extends Vue {

    }
</script>
