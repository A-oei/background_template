<template>
    <div class="aoei-select">
        <div class="aoei-input">
            <label>{{label}}</label>
            <div class="aoei-input-wrap">
                <input type="text"
                       :placeholder="placeholder"
                       :value="selectValue"
                       @change="input"
                >
                <span class="icon iconfont aoei-icon-test60"/>
            </div>
        </div>
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop, Model} from "vue-property-decorator";

    @Component
    export default class FormSelect extends Vue {

        @Model('change', {type: String}) selectValue!: string;

        @Prop({type: String, default: ''}) label: string;
        @Prop({type: String, default: ''}) placeholder: string;

        input(e){
            this.$emit('change',968)
        }
    }
</script>
