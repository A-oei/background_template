import http from "@/core/utils/require";

const loginRequire = http.create({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

export default {
    // login(params: object) {
    //     return loginRequire.post('wecloud/saas/login', params, null, true)
    // },
    login(params: object) {
        return http.post('/mock/login', params, null)
    }
}
