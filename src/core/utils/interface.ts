/**
 * @Author:caofei
 * @date:2020/3/2
 * @Description:公共接口文件
 */


//路由对象
interface RouterObject {
    fullPath: string,
    hash: string,
    matched: object[],
    meta: object,
    name: string,
    params: object,
    path: string,
    query: object
}

interface Intercepotors {
    requestSuccess: object,
    requestError: object,
    responseSuccess: object,
    responseError: object
}

interface VueComponent {
    $attrs?: object,
    $listeners?: object,
    _uid?: number,
    _isVue?: boolean,
    $options?: object,
    _renderProxy?: object,
    _self?: object,
    $parent?: object,
    $root?: object,
    $children?: object[],
    $refs?: object,

    [params: string]: any
}

//http请求错误信息
interface RequestErrorInfo {
    code: number | string,
    message: number | string,
    data?: any
}
//http请求正确信息
interface RequestSuccessInfo {
    username:string,
    password:string,
    token:string
}


export {
    RouterObject,
    Intercepotors,
    VueComponent,
    RequestErrorInfo,
    RequestSuccessInfo
}
