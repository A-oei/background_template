<template>
    <option :value="value" :key="key" :disabled="disabled" :placeholder="placeholder">
        {{label}}
        <slot></slot>
    </option>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component({})
    export default class AoeiOption extends Vue {

        @Prop({type: [String], default: ''}) value: string;
        @Prop({type: String, default: ''}) label: string;
        @Prop({type: [String, Number], default: ''}) key: string | number;
        @Prop({type: Boolean, default: false}) disabled: boolean;
        @Prop({type: String, default: ''}) placeholder: string;

    }
</script>
