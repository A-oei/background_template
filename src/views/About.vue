<template>
    <div>
        <AoeiSelect v-model="tert">
            <AoeiOption label="第一个" value="1"/>
            <AoeiOption label="第二个" value="2"/>
            <AoeiOption label="第二个" value="2"/>
        </AoeiSelect>

        <AoeiDropdown>
            <span>下拉菜单</span>
            <DropdownMenu #dropdown>
                <li>555</li>
            </DropdownMenu>
        </AoeiDropdown>

        <Dialog title="提示" :visible.sync="dialogVisible">
            <span>这是一段信息</span>
            <div slot="footer" class="dialog-footer">
                <button @click="dialogVisible = false">取 消</button>
                <button @click="dialogVisible = false">确 定</button>
            </div>
        </Dialog>

        <div @click="click">触发dialog</div>

        <testTable></testTable>
    </div>
</template>
<script>
    import DropdownMenu from "../components/Dropdown/DropdownMenu";
    import DropdownItem from "../components/Dropdown/DropdownItem";

    import testTable from "../components/Table/Table.vue";



    export default {
        components: {
            DropdownMenu,
            DropdownItem,
            testTable
        },

        data() {
            return {
                tert: '1',
                dialogVisible: false
            }
        },
        methods: {
            click() {
                this.dialogVisible = true;
            }
        }

    };
</script>
