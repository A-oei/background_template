<template>
    <div class="aoei-datePicker text-not-selected">
        <div class="el-date-editor">
            <input type="text">
            <span/>
        </div>
        <div class="el-picker-panel" v-show="panelShow">
            <div class="el-date-picker__header">
                <span>上一月</span>
                <span>上一周</span>
                <h3 class="el-date-picker__header__time">
                    <span>{{currentYear}}</span>
                    <span>年</span>
                    <span>{{currentMonth}}</span>
                    <span>月</span>
                </h3>
                <span>下一周</span>
                <span>下一月</span>
            </div>
            <div class="el-picker-panel__content">
                <table cellspacing='0' cellpadding='0' class="el-date-table">
                    <tbody>
                    <tr class="theadTd">
                        <td v-for="item in pickerPanelThead">
                            {{item}}
                        </td>
                    </tr>
                    <tr>
                        <template v-for="day in  weekDay">
                            <td/>
                        </template>
                        <template v-for="(week,index) in parseInt(currentDays/7)">
                            <td v-for="day in 7">
                                {{index*7+day}}
                            </td>
                        </template>
                        <template v-for="(day,index) in remainingDays">
                            <td>
                                {{currentDays+(index-2)}}
                            </td>
                        </template>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop, Model, Watch} from "vue-property-decorator";
    import {DateConversion, getMounthDays} from '@/core/utils/public';

    @Component
    export default class AoeiDatePicker extends Vue {

        @Prop({default: '', type: [String, Number]}) placeholder: string | number;
        @Prop({default: 'data', type: [String]}) type: string;

        pickerPanelThead: string[] = ['日', '一', '二', '三', '四', '五', '六'];

        panelShow: boolean = true;
        currentYear: string | number = '';
        currentMonth: string | number = '';
        currentDay: string | number = 0;
        currentDays: number = 0;
        remainingDays: number = 0;
        weekDay: number = 0;

        @Watch('currentYear')
        onCurrentYearChange(value: number) {
            this.cirrentDays = getMounthDays(value, this.currentMonth as number)
        }

        @Watch('currentMonth')
        onCurrentMonthChange(value: number) {
            this.cirrentDays = getMounthDays(this.currentYear as number, value);
        }

        created() {
            this.currentYear = DateConversion(new Date(), 'y');
            this.currentMonth = DateConversion(new Date(), 'm');
            this.currentDay = DateConversion(new Date(), 'd');
            this.currentDays = getMounthDays(this.currentYear as number, this.currentMonth as number);
            this.remainingDays = this.currentDays % 7;
            this.weekDay = new Date(`${this.currentYear}/${this.currentMonth}/${this.currentDay}`).getDay();
            console.log(this.weekDay);
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../core/style/public";

    @mixin tdWrap {
        width: 41.4px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
        padding: 5px;
        box-sizing: border-box;
    }

    .aoei-datePicker {
        position: relative;
        .el-date-editor {
            width: 220px;
            height: 40px;
            border-radius: 5px;
            display: inline-block;
        }
        .el-picker-panel {
            width: 322px;
            position: absolute;
            top: 175px;
            left: 334px;
            border: $popBorderColor;
            box-shadow: $boxShadowColor;
            background-color: #fff;
            border-radius: 4px;
            line-height: 30px;
            .el-date-picker__header {
                margin: 12px;
                text-align: center;
                color: $fontInitializedColor;
                line-height: 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                > span {
                    font-size: 12px;
                    color: #8492a6;
                    cursor: pointer;
                }
                .el-date-picker__header__time {
                    span {
                        font-size: 16px;
                        font-weight: 500;
                        padding: 0 2px;
                        line-height: 22px;
                        text-align: center;
                        cursor: pointer;
                        color: $fontInitializedColor;
                    }
                }
            }
            .el-picker-panel__content {
                width: 290px;
                margin: 15px auto;
                .el-date-table {
                    width: 100%;
                    font-size: 12px;
                    tbody {
                        width: 100%;
                        tr {
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: left;
                            align-items: center;
                            td {
                                @include tdWrap;
                                &:hover {
                                    color: $focusColor;
                                }
                            }
                        }
                        .theadTd {
                            border-bottom: 1px solid #ebeef5;
                            td {
                                @include tdWrap;
                            }
                        }
                    }
                }
            }
        }

    }
</style>
