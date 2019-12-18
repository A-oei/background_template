/**
* @Author:caofei
* @date:2019/12/4
* @Description: form表单
*/
<template>
    <form>
        <slot></slot>
    </form>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({})
    export default class AoeiForm extends Vue {

        @Prop({type: Object, default: {}}) rules: object;

        validate(callback) {
            let valid: boolean = true;
            Object.keys(this.rules).map(rile => {
                let checking = this.rules[rile].validator(this.$parent.$data[rile]);
                if (checking != 'success') valid = false;
            })
            callback(valid);
        }
    }

</script>
<style lang="scss" scoped></style>
