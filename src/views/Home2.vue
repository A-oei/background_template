<template>
    <div>
        <AoeiTable :tableData="tableData">
            <TableColumn prop="name" label="姓名" width="180" align="center"></TableColumn>
            <TableColumn prop="address" label="地址" width="250"></TableColumn>
            <TableColumn label="操作" width="400">
                <template slot-scope="scope">
                <button @click="clickBtn(scope)">1</button>
            </template>
            </TableColumn>
            <TableColumn label="操作2" width="400">
                <template slot-scope="scope">
                    <button @click="clickBtn1(scope)">2</button>
                </template>
            </TableColumn>
        </AoeiTable>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component({})
    export default class Home2 extends Vue {
        testText: string = '';

        clickBtn(d) {
            console.log(d);
        }

        clickBtn1(columnSlot) {
            console.log(columnSlot);
        }

        tableData: object[] = [
            {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            },
            {
                date: '2016-03-02',
                name: '李晓明',
                address: '上海市普陀区金沙江路 1518 弄',
            },
        ]
    }
</script>
<style lang="scss" scoped>
    div {
        font-size: 24px;
    }
</style>
