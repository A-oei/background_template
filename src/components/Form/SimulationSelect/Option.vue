<template>
    <li :value="value">{{label}}</li>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component({})
    export default class FormOption extends Vue {

        @Prop({type: [String, Number], default: ''}) value: string | number;
        @Prop({type: [String, Number], default: ''}) label: string | number;
        @Prop({type: [String], default: '1'}) label: string;

    }
</script>
<style lang="scss"></style>
