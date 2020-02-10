<template>
    <table class="aoei-table">

        <!--<slot v-bind:scoped="tableData"></slot>-->

        <thead class="aoei-thead">
        <tr class="thead-column">
            <template v-for="(item) in columnData">
                <th class="column-th"
                    :style="{
                    'width':item.width+'px',
                    'textAlign':item.align
                    }">
                    {{item.label}}
                </th>
            </template>
        </tr>
        </thead>

        <tbody class="aoei-tbody">
        <tr v-for="(item,index) in tableData" class="tbody-column">
            <template v-for="column in columnData">
                <template>
                    <td class="column-td"
                        :class="(index&1==1)&stripe?'el-table__row--striped':''"
                        :style="{
                        'width':column['width']+'px',
                        'textAlign':column['align']
                        }">
                        <template v-if="column['prop'].search('operation_')!=-1">
                            <slot name="tableColumnSlot"/>
                            {{renderTableColumn($createElement,item[column['prop']])}}
                        </template>
                        <template v-else>
                            {{item[column['prop']]}}
                        </template>
                    </td>
                </template>
            </template>
        </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
    import {Component, Vue, Prop, Watch} from "vue-property-decorator";

    @Component
    export default class AoeiTable extends Vue {

        @Prop({type: Array, default: []}) tableData: object[];
        @Prop({type: Boolean, default: false}) stripe: boolean;

        columnData: object[] = [];

        renderTableColumn(h, vnode) {

            console.log(this.$slots.tableColumnSlot, 'tableColumnSlot');

            this.$slots.tableColumnSlot = vnode;
        }

        @Watch('$slots.tableColumnSlot', {immediate: true, deep: true})


        created() {

            this.$slots.default.map((item, index) => {
                this.columnData.push({
                    prop: item.componentOptions.propsData.prop || '',
                    label: item.componentOptions.propsData.label,
                    width: item.componentOptions.propsData.width,
                    align: item.componentOptions.propsData.align,
                })

                if (!item.componentOptions.propsData.prop) {
                    this.columnData[index]['prop'] = `operation_${index}`;
                    this.tableData.map(table => {
                        table[`operation_${index}`] = item;
                    })
                }
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
                &:hover > td {
                    background-color: #f5f7fa;
                }
                .column-td {
                    padding: 10px 0;
                    height: 24px;
                    line-height: 24px;
                    color: #606266;
                    font-size: 14px;
                    background-color: #ffffff;
                }
                .el-table__row--striped {
                    background-color: #fafafa;
                }
            }
        }
    }
</style>
<!--<script type="text/jsx">-->
<!--export default {-->
<!--name: '',-->
<!--render(h) {-->
<!--return ()-->
<!--}-->
<!--}-->
<!--</script>-->
