import Service from "@/utils/axios";

export const loginApi = (params) => {
    return Service({
        url: '/user/login',
        method: 'post',
        data: params,
    })
}

export const getListApi = () => {
    return Service({
        url: '/getList',
        method: 'post',
    })
}
export const downLoad = () => {
    return Service({
        url: '/download',
        method: 'get',
        responseType: 'blob'
    })
}
export const addListApi = () => {
    return Service({
        url: '/addList',
        method: 'post',
    })
}