/**
 * @Author:caofei
 * @date:2019/11/29
 * @Description:公共方法
 */

/**
 判别变量类型
 *@params 参数
 */
function TypeJudgment(params: any): string {
    return Object.prototype.toString.call(params).split(' ')[1].slice(0, -1).toLocaleLowerCase();
}

/**
 获取当前年月日
 *@params 参数
 */
function DateConversion(date: Date, type: string): string | number {

    let y: number = date.getFullYear(),
        m: number = date.getMonth() + 1,
        d: number = date.getDate();

    if (type == 'y') return y;
    if (type == 'm') return m;
    if (type == 'd') return d;

    return y + '年' + m + '月' + d + '日';
}

/**
 获取当前月天数
 *@params 参数
 */
function getMounthDays(year: number, mounth: number): number {
    let days: Date = new Date(year, mounth, 0);
    return days.getDate();
}


export {
    TypeJudgment,
    DateConversion,
    getMounthDays
}



