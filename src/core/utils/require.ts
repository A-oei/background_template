/**
 * @Author:caofei
 * @date:2019/11/26
 * @Description:请求封装
 */


import axios from "axios";
import main from "./public";
import qs from "qs";
import {Method} from './type/index';
import {httpCode} from "./enum/index";
import {Intercepotors} from '@/core/utils/interface'

let baseConfig: object = {
    baseURL: '',
    timeout: 30000,
    withCredentials: false,
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
}


const intercepotors: Intercepotors = {
    requestSuccess(config: any) {
        let token = window.localStorage.getItem('aoei-token');
        if (token) {
            config.headers['Token'] = token;
        }
        return config;
    },
    requestError(error: any) {
        return Promise.reject(error)
    },
    responseSuccess(response: any) {
        if (!response.data.code) {
            response.data.code = response.data.status || response.data.resultCode
        }
        return response;
    },
    responseError(error: any) {
        return Promise.reject(error)
    }
}

function DataProviders(res: { [data: string]: any }) {
    let rdata = res.data;
    if (rdata.code == httpCode.success) {
        return Promise.resolve(rdata.data);
    }
    if (rdata.code == httpCode.overtime) {
        window.localStorage.removeItem('token');
        return;
    }
    if (rdata.code == httpCode.tokenInvalid) {
        window.localStorage.removeItem('token');
        rdata.message = '登录超时，请重新登录';
        rdata.callback = (that: any) => {
            that.$router.push('login')
        };
        return Promise.reject(rdata);
    }
    rdata.message = rdata.message || '服务器内部错误';
    return Promise.reject(rdata);
}


interface Params {
    [__rid: string]: any
}

/**
 *
 *@params ajax 请求体
 *@params url 请求地址
 *@params method 请求方法
 *@params params 请求参数
 *@params isFormData 是否为formData格式，默认为false
 *@params isUpload 是否要上传文件，默认为false
 */
let http = (ajax: any, url: string, method: Method, params: Params, isFormData: boolean = false, isUpload: boolean = false, processor: any) => {

    //ajax.defaults.baseURL (axios.defaults.baseURL指定全局默认路径)
    url = /^(http|https):\/\//.test(url) ? url : (ajax.defaults.baseURL + url);

    let data: Params = {...params};

    if (method == 'get' && data && main.TypeJudgment(data) == 'object') {
        for (let item in data) {
            (data[item] === '' || data[item] === undefined || data[item] === null) && (delete data[item])
        }
        data['__rid'] = new Date().getTime();
    }

    try {
        Object.keys(data).map(item => {
            if (params[item] && main.TypeJudgment(data) == 'string') params[item] = params[item].trim();
        })
    }
    catch (e) {
        data = {...params}
    }

    let options: { [params: string]: any } = {
        url,
        method,
        headers: ajax['headers'],
    };

    if (method.toLocaleLowerCase() === 'get') {
        options.params = data;
    }
    if (method.toLocaleLowerCase() === 'post') {
        if (isUpload) {
            let params = new FormData();
            Object.keys(data).forEach(key => {
                params.append(key, data[key])
            })
            data = params;
        }
        if (isFormData) {
            data = qs.stringify(data)
        }
        options.data = data;
    }

    processor = processor || DataProviders;

    return ajax.request(options)
        .then(function (res: any) {
            return processor(res)
        }, function (err: any) {
            return processor(err)
        })
}


let Request = (config: object) => {
    let ajax: any = null;

    function Ajax(config: object) {
        if (!ajax) {
            ajax = axios.create({...baseConfig, ...config});
            ajax.interceptors.request.use(intercepotors.requestSuccess, intercepotors.requestError);
            ajax.interceptors.response.use(intercepotors.responseSuccess, intercepotors.responseError);
        }
        return ajax;
    }

    return {
        get(url: string, params: Params, processor: any) {
            return http(Ajax(config), url, 'get', params, false, false, processor)
        },
        post(url: string, params: Params, processor: any, isFormData: boolean = false, isUpload: boolean = false) {
            return http(Ajax(config), url, 'post', params, isFormData, isUpload, processor)
        }
    }
}

export default {
    ...Request({}),
    create: Request,
    config(config: object) {
        baseConfig = {
            ...baseConfig,
            ...config
        }
    }

}

