<template>
    <div class="saas-role-management">

        <aoei-card style="padding: 5px 20px;margin-bottom: 15px;">
            <AoeiDatePicker v-model="time"/>
        </aoei-card>

        <aoei-card>
            <AoeiTable :tableData="tableData" stripe>
                <TableColumn prop="name" width="200" label="角色名称"/>
                <TableColumn prop="productName" label="服务名称"/>
                <TableColumn prop="createTime" label="创建时间"/>
                <TableColumn prop="creator" label="创建人"/>
                <TableColumn label="操作" width="400">
                    <template slot-scope="scope">
                        <aoei-button type="text" @click="roleEdit(scope)" style="margin-right: 8px">修改</aoei-button>
                        <aoei-button type="text">删除</aoei-button>
                    </template>
                </TableColumn>
            </AoeiTable>
            <AoeiPagination :total="500" style="margin-top: 12px"/>
        </aoei-card>

        <RoleChange ref="roleChange" :roleName="roleName"/>

    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import services from "@/services/Saas/SaasRoleManagement";
    import RoleChange from "./RoleChange.vue";
    import {VueComponent} from '@/core/utils/interface';

    @Component({
        components: {
            RoleChange
        }
    })
    export default class SaasRoleManagement extends Vue {


        tableData: object[] = [];
        time: number | string = '';
        dialogVisible: boolean = true;
        roleName: string = '';


        roleEdit(scope: any) {
            let roleChange: VueComponent = this.$refs.roleChange;
            roleChange.dialogVisible = true;
        }

        inquireLists() {
            services.get_list({pageIndex: 1, pageNumber: 10})
                .then(res => {
                    this.tableData = res.list;
                })
        }

        created() {
            this.inquireLists();
        }
    }

</script>
