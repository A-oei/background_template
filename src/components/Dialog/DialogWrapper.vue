<template>
    <div class="dialog-wrapper"
         :style="{
            display:visible?'block':'none'
        }"
         @click="visible=false"
    />
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class DialogWrapper extends Vue {
        visible: boolean = false;
    }
</script>
<style lang="scss">
    .dialog-wrapper {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
    }
</style>
