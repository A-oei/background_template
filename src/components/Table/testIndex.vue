<script>
    export default {
        name: 'testTable',
        props: {
            tableData: {
                type: Array,
                default() {
                    return []
                }
            },
            stripe: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                columnData: []
            }
        },
        mounted() {
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
                        // this.$slots.tableColumnSlot = 12;
                        table[`operation_${index}`] = item;
                    })
                }
            })
        },
        render(h) {
            return (
                h(
                    'table',
                    {
                        'class': {
                            'aoei-table': true
                        }
                    },
                    [
                        h(
                            'thead',
                            {
                                'class': {
                                    "aoei-thead": true
                                }
                            },
                            [
                                h('tr',
                                    {
                                        'class': {
                                            'thead-column': true
                                        },
                                    },
                                    this.columnData.map(item => {
                                        return h(
                                            'th',
                                            {
                                                'class': {
                                                    'column-th': true
                                                },
                                                'style': {
                                                    'width': item.width + 'px',
                                                    'textAlign': item.align
                                                }
                                            },
                                            item.label
                                        )
                                    })
                                )
                            ],
                        ),
                        h(
                            'tbody',
                            {
                                'class': {
                                    'aoei-tbody': true
                                }
                            },
                            [
                                this.tableData.map((item, index) => {
                                    return h(
                                        'tr',
                                        {
                                            'class': {
                                                'tbody-column': true
                                            }
                                        },
                                        [
                                            this.columnData.map(column => {
                                                let content = item[column['prop']];
                                                return h(
                                                    'td',
                                                    {
                                                        'class': {
                                                            'column-td': true,
                                                            'el-table__row--striped': (index & 1 == 1) & this.stripe
                                                        },
                                                        'style': {
                                                            'width': column['width'] + 'px',
                                                            'textAlign': column['align']
                                                        },
                                                        'slot': 'default'
                                                    },
                                                    [content]
                                                    // {item[column['prop']]},
                                                )
                                            })
                                        ]
                                    )
                                })
                            ]
                        )
                    ]
                )
            )
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
