<template>
    <ul class="el-menu-wrap text-not-selected"
        :class="collapse?'is-collapse':''"
        :style="{
        'backgroundColor':backgroundColor,
        }"
    >
        <sidebar-item v-for="(item,index) in routeLists"
                      :items="item"
                      :index="index"
                      v-bind="$attrs"
        />
    </ul>
</template>
<script lang="ts">
    import SidebarItem from "./SidebarItem.vue";

    import menu from "@/app.menu.ts";


    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({
        components: {
            SidebarItem
        }
    })
    export default class AoeiSidebar extends Vue {
        routeLists: Array = [];

        @Prop({type: String, default: '#fff'}) backgroundColor: string;
        @Prop({type: Boolean, default: false}) collapse: boolean;

        created() {
            // this.routeLists = this.$router.options.routes;

            console.log(menu,'menu');
            this.routeLists = menu;
        }
    }
</script>
<style lang="scss" scoped>
    @import "sidebar.scss";
</style>
