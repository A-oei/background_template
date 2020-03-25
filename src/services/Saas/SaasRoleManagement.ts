import http from "@/core/utils/require";

const mock = http.create({
    baseURL: ''
})

export default {
    //请求列表
    get_list(params: object) {
        return http.get('/mock/list', params, null)
    }
}
