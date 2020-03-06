<template>
    <div ref="column" class="table-column">
        <slot v-bind:scope="{...scope}"/>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component
    export default class TableColumn extends Vue {
        @Prop({type: String, default: ''}) prop: string;
        @Prop({type: String, default: ''}) label: string;
        @Prop({type: String, default: '200px'}) width: string;
        @Prop({type: String, default: 'left'}) align: string;

        scope: object = {};

        mounted() {
            let scopeNodeValue = this.$refs.column.parentElement.attributes.scope.nodeValue || '';
            this.scope = JSON.parse(scopeNodeValue)
        }
    }
</script>
<style lang="scss" scoped>
    .table-column {
        line-height: 1;
    }
</style>
