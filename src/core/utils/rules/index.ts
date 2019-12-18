import regular from "./regular";

const success = () => {
    return 'success';
};

interface Callback {
    (value: string ): string
}

const isNull = (value: string , callback?: Callback) => {
        if (value == '' || value == undefined || value == null) {
            return '输入内容不能为空'
        } else {
            if (callback) return callback(value);
            return success();
        }
    },
    //账号校验
    account = (value: string) => {
        return isNull(value, (v: string) => {
            if (!regular.normal.test(v)) {
                return '输入内容中必须包含数字、大小写字母中的两种'
            } else if (!regular.space.test(v)) {
                return '输入内容中不能包含空格'
            } else if (regular.chinese.test(v)) {
                return '输入内容中不能包含中文'
            } else {
                return success();
            }
        })
    }

export default {
    isNull,
    account
}
