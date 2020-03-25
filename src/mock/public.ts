export default {
    GetURL(url: string) {
        /**匹配get请求地址
         * @params
         * url 路径地址
         */
        return RegExp(`${url}+.*`)
    },
    SuccessTem(data: object) {
        /**请求成功返回模板
         * @params
         * data 响应数据
         */
        return {
            code: 200,
            message: '请求成功',
            data
        }
    },
    ErrorTem(data?: object) {
        /**请求失败返回模板
         * @params
         * data 响应数据
         */
        return {
            code: 401,
            message: '用户名或密码错误',
            data
        }
    },
    params2obj(url: string) {
        /**将get请求中url的参数部分转化为对象格式
         * @params
         * data 响应数据
         */
        let params: { [key: string]: any } = {},
            urlParams = url.split('?')[1];

        let i = 0,
            paramsStr = urlParams.split('&'),
            l = paramsStr.length;

        for (; i < l; i++) {
            let key = paramsStr[i].split('=')[0],
                val = paramsStr[i].split('=')[1];
            params[key] = val;
        }

        return params;
    }
}
