<script>
    export default {
        name: 'Table',
        props: {
            tableData: {
                type: Array,
                default() {
                    return []
                }
            },
            //是否为斑马纹
            stripe: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                columnData: [],
                tableItemData: []
            }
        },
        methods: {
            transformationData() {
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
        },
        watch: {
            tableData: {
                handler(n, o) {
                    this.tableItemData = [];
                    this.tableData.map((item, index) => {
                        let obj = {};
                        for (let key in  item) {
                            if (key.search('operation_') == -1) {
                                obj[key] = item[key];
                            }
                        }
                        this.tableItemData.push({row: obj, index});
                    })
                    this.transformationData();
                },
                deep: true
            }
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
                                    "aoei-thead": true,
                                    'text-not-selected': true
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
                                                'tbody-column': true,
                                                'tbody-colum-stripe': this.stripe
                                            }
                                        },
                                        [
                                            this.columnData.map(column => {

                                                let content = item[column['prop']],
                                                    scope = this.tableItemData[index];
                                                let scopeStringify = JSON.stringify(scope);

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
                                                        'attrs': {
                                                            scope: scopeStringify
                                                        }
                                                    },
                                                    [content]
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
        border-collapse: collapse;
        .aoei-thead {
            .thead-column {
                .column-th {
                    color: #909399;
                    font-size: 14px;
                    font-weight: bold;
                    text-align: left;
                    width: 200px;
                    padding-bottom: 15px;
                }
            }
        }

        .aoei-tbody {
            .tbody-column {
                &:hover > td {
                    background-color: #f5f7fa;
                    border-color: #f5f7fa;
                }
                .column-td {
                    padding: 8px 5px;
                    height: 18px;
                    line-height: 18px;
                    box-sizing: border-box;
                    color: #606266;
                    font-size: 12px;
                    background-color: #ffffff;
                }
                .el-table__row--striped {
                    background-color: #fafafa;
                }
            }
            .tbody-colum-stripe {
                &:nth-of-type(2n) {
                    background-color: #fafafa;
                    border-bottom: 1px solid #ebeef5;
                }
            }
        }
    }
</style>
