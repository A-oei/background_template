<template>
    <div>
        <slot></slot>
        {{renderChild($createElement)}}
        <slot name="test"></slot>
    </div>
</template>

<script lang="ts" type="text/jsx">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component
    export default class Test extends Vue {

        renderChild(h) {
            this.$slots.test = (this.$slots.default);
        }

    }
</script>
