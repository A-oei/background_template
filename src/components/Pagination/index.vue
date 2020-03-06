<template>
    <div class="aoei-pagination text-not-selected">
        <span>共 {{total}} 条</span>
        <div class="aoei-pagination__sizes">
            <AoeiSelect v-model="sizeNumber" @change="changePageSize(sizeNumber)">
                <AoeiOption v-for="item in pageSizes" :key="item" :value="item" :label="item+'条/页'"></AoeiOption>
            </AoeiSelect>
        </div>
        <span class="icon iconfont aoei-icon-test59" :class="{'is-disabled':prevDisabled}" @click="changePage('prev')"/>
        <ul class="aoei-pager">
            <li v-show="prevShow" @click="changePage(1)">1</li>
            <li v-show="prevShow">...</li>
            <li v-for="item in showPageIndex" @click="changePage(item+1)" :class="{active:initialIndex==item+1}">
                {{item+1}}
            </li>
            <li v-show="nextShow">...</li>
            <li v-show="nextShow" @click="changePage(paginationIndex)">{{paginationIndex}}</li>
        </ul>
        <span class="icon iconfont aoei-icon-test61" @click="changePage('next')" :class="{'is-disabled':nextDisabled}"/>
        <div class="aoei-pagination-jump">
            <span>前往</span>
            <form-input v-model="initialIndex"/>
            <span>页</span>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({
        computed: {
            paginationIndex() {
                return this.total / this.pageSizeNumber;
            },
            showPageIndex() {
                this.initialIndex = this.initialIndex * 1;
                if (this.paginationIndex <= this.pagerCount) {
                    this.prevShow = false;
                    this.nextShow = false;
                    return [0, 1, 2, 3, 4];
                }
                if (this.initialIndex <= 3) {
                    this.prevShow = false;
                    this.nextShow = true;
                    return [0, 1, 2, 3, 4];
                }
                else if (this.initialIndex >= this.paginationIndex - 2) {
                    this.prevShow = true;
                    this.nextShow = false;
                    return [this.paginationIndex - 5, this.paginationIndex - 4, this.paginationIndex - 3, this.paginationIndex - 2, this.paginationIndex - 1]
                }
                else {
                    this.prevShow = true;
                    this.nextShow = true;
                    return this.totalArray.slice(this.initialIndex - 2, this.initialIndex + 2);
                }
            },
            prevDisabled() {
                return this.initialIndex == 1;
            },
            nextDisabled() {
                return this.initialIndex == this.paginationIndex
            },
            pageSizeNumber() {
                return this.pageSize ? this.pageSize : this.sizeNumber
            }
        }
    })
    export default class AoeiPagination extends Vue {

        @Prop({default: 0, type: Number}) total: number;
        @Prop({default: '', type: [Number, String]}) pageSize: number | string;
        @Prop({default: false, type: Boolean}) background: boolean;
        @Prop({default: 5, type: Number}) pagerCount: number;
        @Prop({default: false, type: Boolean}) disabled: boolean;
        @Prop({default: () => [10, 20, 50, 100], type: Array}) pageSizes: number[];

        initialIndex: number = 1;
        prevShow: boolean = false;
        nextShow: boolean = false;
        totalArray: number[] = [];
        sizeNumber: number = 10;

        changePage(instructions: string | number): void {

            if (instructions == this.initialIndex) {
                return;
            }
            if (instructions == 'next' && this.initialIndex < this.paginationIndex) {
                this.initialIndex++;
            }
            else if (instructions == 'prev' && this.initialIndex > 1) {
                this.initialIndex--;
            }
            else if (typeof instructions == 'number') {
                instructions = instructions * 1;
                this.initialIndex = instructions as number;
            }

            this.$emit('current-change', instructions)
        }

        changePageSize(val) {
            this.initialIndex = 1;
            this.$emit('size-change', val)
        }

        mounted() {
            this.totalArray = Array.from(new Array(this.total).keys());

        }
    }
</script>
<style lang="scss" scoped>
    @mixin itemWrap {
        height: 28px;
        line-height: 28px;
        min-width: 36px;
        text-align: center;
        font-weight: 700;
        box-sizing: border-box;
        background-color: #fff;
        vertical-align: top;
    }

    @mixin selectPublic {
        width: 100%;
        height: 100%;
        line-height: 28px;
        font-weight: 400;
    }

    .aoei-pagination {
        display: flex;
        justify-content: left;
        align-items: center;
        //显示数量下拉框
        .aoei-pagination__sizes::v-deep {
            @include itemWrap;
            width: 100px;
            margin: 0 5px;
            .aoei-select, .aoei-input, .aoei-input-wrap, .aoei-input-wrap > div {
                @include selectPublic;
            }
            .aoei-input-wrap [class^='icon'] {
                line-height: 28px;
            }
            .aoei-input-wrap > div {
                font-size: 12px;
            }
            .aoei-select .aoei-select-dropdown {
                min-width: 100px;
            }
        }
        //跳转选项
        .aoei-pagination-jump::v-deep {
            display: flex;
            align-items: center;
            margin-left: 5px;
            .aoei-form-input {
                width: 46px;
                height: 28px;
                margin: 0 2px;
            }
        }
        [class^='icon'] {
            @include itemWrap;
            color: #303133;
            &.is-disabled {
                color: #c0c4cc;
            }
        }
        .aoei-pager {
            display: inline-block;
            vertical-align: top;
            height: 100%;
            cursor: pointer;

            li {
                @include itemWrap;
                display: inline-block;
                padding: 0 4px;
                font-size: 13px;
                &.active {
                    color: #409eff;
                    cursor: default;
                }
                &:hover {
                    color: #409eff;
                }
            }
        }
    }
</style>
