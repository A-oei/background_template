import http from "@/core/utils/require";

export default {
    //请求列表
    get_list(params: object) {
        return http.get('wecloud/saas/role/queryPageRole', params, null)
    }
}
