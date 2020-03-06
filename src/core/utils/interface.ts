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

export {
    RouterObject,
    Intercepotors
}
