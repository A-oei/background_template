<template>
    <div class="aoei-select aoei-form-item">
        <label>{{label}}</label>
        <select v-model="selectValue"
                :disabled="disabled"
                :class="{
                'is-disabled':disabled
                }"
                @change="$emit('change',$event.target.value)"
        >
            <slot></slot>
        </select>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop, Model} from "vue-property-decorator";

    @Component({})
    export default class AoeiSelect extends Vue {
        @Model('change', {type: String}) selectValue: string;

        @Prop({type: Boolean, default: false}) disabled: boolean;
        @Prop({type: [String, Number], default: ''}) label: string | number;

    }
</script>
<style lang="scss" scoped>
    .aoei-form-item{}
    .is-disabled{
        cursor: not-allowed;
    }
</style>
