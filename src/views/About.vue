<template>
    <div>
        <AoeiSelect v-model="tert">
            <AoeiOption label="第一个" value="1"/>
            <AoeiOption label="第二个" value="2"/>
            <AoeiOption label="第三个" value="3"/>
        </AoeiSelect>
        <p>{{tert}}</p>

        <Dialog title="提示" :visible.sync="dialogVisible">
            <span>这是一段信息</span>
            <div slot="footer" class="dialog-footer">
                <button @click="dialogVisible = false">取 消</button>
                <button @click="dialogVisible = false">确 定</button>
            </div>
        </Dialog>

        <div @click="click">触发dialog</div>

        <AoeiDropdown style="margin-top: 50px;margin-left: 200px" @command="handleCommand">
            <span>下拉菜单</span>
            <AoeiDropdownMenu slot="dropdown">
                <AoeiDropdownItem command="1" divided>黄金</AoeiDropdownItem>
                <AoeiDropdownItem command="2" disabled>黄金</AoeiDropdownItem>
                <AoeiDropdownItem command="3">黄金</AoeiDropdownItem>
            </AoeiDropdownMenu>
        </AoeiDropdown>

        <p>日期</p>
        <AoeiDatePicker v-model="adatee"></AoeiDatePicker>
        <p>{{adatee}}</p>
    </div>
</template>
<script>
    import servers from "@/services/login";

    export default {
        components: {},

        data() {
            return {
                tert: '1',
                dialogVisible: false,
                adatee: '555'
            }
        },
        methods: {
            click() {
                this.dialogVisible = true;
            },
            handleCommand(i) {
                console.log(i, 'i');
            }
        }
    };
</script>
