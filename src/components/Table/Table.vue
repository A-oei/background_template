<template>
    <table class="aoei-table">

        <slot></slot>

        <thead class="aoei-thead">
        <tr class="thead-column">
            <template v-for="(item,index) in columnData">
                <th class="column-th"
                    :style="{
                    'width':item.width+'px',
                    'textAlign':item.align
                    }"
                >
                    {{item.label}}
                </th>
            </template>
        </tr>
        </thead>

        <tbody class="aoei-tbody">
        <tr v-for="(item,index) in tableData" class="tbody-column">
            <template v-for="column in columnData">
                <td class="column-td"
                    :style="{
                    'width':column['width']+'px',
                    'textAlign':column['align']
                    }"
                >
                    {{item[column['prop']]}}
                </td>
            </template>
        </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component
    export default class AoeiTable extends Vue {

        @Prop({type: Array, default: []}) tableData: object[];

        columnData: object[] = [];

        created() {
            console.log(this.$slots, '$slot');

            this.$slots.default.forEach(item => {
                this.columnData.push({
                    prop: item.componentOptions.propsData.prop,
                    label: item.componentOptions.propsData.label,
                    width: item.componentOptions.propsData.width,
                    align: item.componentOptions.propsData.align,
                })
            })

        }
    }
</script>
<style lang="scss" scoped>
    .aoei-table {

        .aoei-thead {
            .thead-column {
                .column-th {
                    color: #909399;
                    font-size: 14px;
                    font-weight: bold;
                    text-align: left;
                }
            }
        }

        .aoei-tbody {
            .tbody-column {
                .column-td {
                    padding: 10px 0;
                    height: 24px;
                    line-height: 24px;
                    color: #606266;
                    font-size: 14px;
                }
            }
        }
    }
</style>
