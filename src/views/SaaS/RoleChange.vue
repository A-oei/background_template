<template>
    <Dialog :title='title' :visible.sync="dialogVisible">
        <div>
            <form-input v-model="roleName" label="角色名称"/>

            <AoeiSelect v-model="role" label="角色类型">
                <AoeiOption label="系统用户" value="0"/>
                <AoeiOption label="系统管理员" value="1"/>
                <AoeiOption label="租户用户" value="2"/>
                <AoeiOption label="渠道用户" value="3"/>
            </AoeiSelect>


        </div>
        <div slot="footer" class="dialog-footer">
            <aoei-button @click="dialogVisible = false">取 消</aoei-button>
            <aoei-button @click="dialogVisible = false" type="primary" style="margin-left: 15px;">确 定</aoei-button>
        </div>
    </Dialog>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component
    export default class RoleChange extends Vue {

        @Prop({default: '', type: String}) roleName: string;

        dialogVisible: boolean = false
        title: string = '';
        role: string = '1';

        created() {
            this.title = `${this.roleName}权限编辑`;
        }
    }

</script>
<style lang="scss" scoped>

</style>
