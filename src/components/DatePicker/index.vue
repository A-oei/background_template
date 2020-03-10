<template>
    <div class="aoei-datePicker text-not-selected">
        <div class="el-date-editor" @click="panelShow=!panelShow">
            <input type="text" :placeholder="placeholder" :value="dateValue">
            <span class="icon iconfont aoei-icon-test85"/>
        </div>
        <div class="el-picker-panel" v-show="panelShow">
            <div class="el-date-picker__header">
                <span class="icon iconfont aoei-icon-test87" @click="changeYears(-1,'prev')"/>
                <span class="icon iconfont aoei-icon-test59" @click="changeYears(-1)"/>
                <h3 class="el-date-picker__header__time">
                    <span>{{currentYear}}</span>
                    <span>年</span>
                    <span>{{currentMonth}}</span>
                    <span>月</span>
                </h3>
                <span class="icon iconfont aoei-icon-test61" @click="changeYears(1)"/>
                <span class="icon iconfont aoei-icon-test86" @click="changeYears(1,'next')"/>
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
                            <td v-for="day in 7" @click="selectionData(index*7+day)">
                                {{index*7+day}}
                            </td>
                        </template>
                        <template v-for="(day,index) in remainingDays">
                            <td v-if="remainingDays%2>0" @click="selectionData(currentDays+index-2)">
                                {{currentDays+index-2}}
                            </td>
                            <td v-else @click="selectionData(currentDays+index-1)">
                                {{currentDays+index-1}}
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

    @Component({
        computed: {
            remainingDays() {
                return this.currentDays % 7;
            },
            weekDay() {
                return new Date(`${this.currentYear}/${this.currentMonth}/1`).getDay();
            }
        }
    })
    export default class AoeiDatePicker extends Vue {

        @Model('change', {type: String}) dateValue!: string;

        @Prop({default: '选择日期', type: [String, Number]}) placeholder: string | number;
        @Prop({default: 'data', type: [String]}) type: string;
        @Prop({default: 'date', type: String}) format: string;

        pickerPanelThead: string[] = ['日', '一', '二', '三', '四', '五', '六'];

        panelShow: boolean = false;
        currentYear: string | number = '';
        currentMonth: string | number = '';
        currentDay: string | number = 0;
        currentDays: number = 0;

        @Watch('currentYear')
        onCurrentYearChange(value: number) {
            this.currentDays = getMounthDays(value, this.currentMonth as number)
        }

        @Watch('currentMonth')
        onCurrentMonthChange(value: number) {
            this.currentDays = getMounthDays(this.currentYear as number, value);
        }

        changeYears(n: number, year?: string) {
            if (year && year == 'prev') return this.currentYear--;
            if (year && year == 'next') return this.currentYear++;

            if (this.currentMonth > 11 && n > 0) {
                this.currentYear++;
                this.currentMonth = 1
            }
            else if (this.currentMonth < 2 && n < 0) {
                this.currentMonth = 12;
                this.currentYear--;
            }
            else {
                this.currentMonth += n;
            }
        }

        selectionData(day: number) {
            this.currentDay = day;

            let current: string = `${this.currentYear}/${this.currentMonth}/${this.currentDay}`,
                time: any = '';

            if (this.format == 'timestamp') {
                time = new Date(current).getTime();
            }
            else {
                time = this.currentYear + '年' + this.currentMonth + '月' + this.currentDay + '日'
            }

            this.$emit('change', time)
            this.panelShow = false;
        }

        created() {
            this.currentYear = DateConversion(new Date(), 'y');
            this.currentMonth = DateConversion(new Date(), 'm');
            this.currentDay = DateConversion(new Date(), 'd');
            this.currentDays = getMounthDays(this.currentYear as number, this.currentMonth as number);
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
            input {
                width: 100%;
                height: 100%;
                line-height: 40px;
                box-sizing: border-box;
                padding: 0 30px;
                background-color: #fff;
                color: $fontInitializedColor;
                &::-webkit-input-placeholder {
                    color: $iconColor;
                }
            }
            span {
                height: 100%;
                line-height: 40px;
                text-align: center;
                position: absolute;
                left: 5px;
                top: 0;
                color: $iconColor;
                cursor: pointer;
            }
        }
        .el-picker-panel {
            width: 322px;
            position: absolute;
            top: 45px;
            left: 0;
            z-index: 2200;
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
                    font-size: 16px;
                    color: #8492a6;
                    cursor: pointer;
                    font-weight: 500;
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
                            }
                            &:not(.theadTd) {
                                td {
                                    &:hover {
                                        color: $focusColor;
                                    }
                                }
                            }
                        }
                        .theadTd {
                            border-bottom: 1px solid #ebeef5;
                        }
                    }
                }
            }
        }

    }
</style>
