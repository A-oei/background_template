<template>
    <div>
        <slot name="columnSlot"></slot>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component
    export default class TableColumn extends Vue {
        @Prop({type: String, default: ''}) prop: string;
        @Prop({type: String, default: ''}) label: string;
        @Prop({type: String, default: ''}) width: string;
        @Prop({type: String, default: ''}) align: string;
    }
</script>
