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
                <TableColumn label="操作2" width="400">
                    <template slot-scope="scope">
                        <aoei-button type="text" @click="change(scope)" style="margin-right: 8px">修改</aoei-button>
                        <aoei-button type="text">删除</aoei-button>
                    </template>
                </TableColumn>
            </AoeiTable>
            <AoeiPagination :total="500" style="margin-top: 12px"/>
        </aoei-card>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import services from "@/services/Saas/SaasRoleManagement";

    @Component
    export default class SaasRoleManagement extends Vue {

        tableData: object[] = [];
        time: number | string = '';

        change(scope) {
            console.log(scope.scope);
            this.$router.push('saasPop')
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
