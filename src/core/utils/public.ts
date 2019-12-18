/**
    * @Author:caofei
    * @date:2019/11/29
    * @Description:公共方法
*/

/**
 判别变量类型
*@params 参数
*/
function TypeJudgment(params:any):string{
    return Object.prototype.toString.call(params).split(' ')[1].slice(0,-1).toLocaleLowerCase();
}

export default {
    TypeJudgment
}


