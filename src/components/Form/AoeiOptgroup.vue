<template>
    <optgroup :label="label" :disabled="disabled">
        <slot></slot>
    </optgroup>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component({})
    export default class AoeiOptgroup extends Vue {

        @Prop({type: String, default: ''}) label: string;
        @Prop({type: Boolean, default: false}) disabled: boolean;

    }
</script>
