<template>

        <li v-if="items.children" class="el-submenu">
            <div class="el-submenu__title" @click="isOpened=!isOpened">
                <i v-if="items.icon"
                   :class="items.icon?items.icon:''"
                   class="el-icon-location icon iconfont"/>
                <span :style="{'color':textColor}">
                {{items.title}}
            </span>
                <i class="el-submenu__icon-arrow icon iconfont"
                   :class="isOpened?'aoei-icon-test60':'aoei-icon-test58'"/>
            </div>
            <ul class="el-menu icon iconfont"
                :class="{'is-opened':!isOpened}">
                <SidebarItem :textColor="textColor"
                             :activeTextColor="activeTextColor"
                             v-for="(child,i) in items.children"
                             :items="child"
                             :index="index+'-'+i"/>
            </ul>
        </li>

        <router-link v-else-if="!items.children" class="el-menu-item" tag="li"
                     :to="items.index"
                     :class="{
                 'is-active':index==$store.state.navigation.currentIndex,
                  'is-disabled':items.disabled
                 }"
                     @click.native="itemLinkClick(index,items.disabled)">

            <i class="el-icon-menu icon iconfont" v-if="items.icon"
               :class="items.icon"/>

            <span :style="{
        'color':index==$store.state.navigation.currentIndex
        ?activeTextColor
        :textColor,
        }">
            {{items.title}}
        </span>

        </router-link>

</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component
    export default class SidebarItem extends Vue {

        @Prop({type: [Array, Object], default: []}) items: Array | object;
        @Prop({type: String, default: '#303133'}) textColor: string;
        @Prop({type: String, default: '#409eff'}) activeTextColor: string;
        @Prop({type: [String, Number], default: ''}) index: string | number;

        isOpened: boolean = false;
        isActive: boolean = false;

        itemLinkClick(i, isDisabled) {
            if (isDisabled) {
                return;
            }
            this.$store.commit('changeIndex', i);
        }
    }
</script>
