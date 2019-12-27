<template>
    <div>
        <AoeiTable :tableData="tableData">
            <TableColumn prop="name" label="姓名" width="180" align="center"></TableColumn>
            <TableColumn prop="address" label="地址" width="250"></TableColumn>
        </AoeiTable>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    export default class Home2 extends Vue {

        testText: string = '';

        tableData: object[] = [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
</script>
<style lang="scss" scoped>
    div {
        font-size: 24px;
    }
</style>
