import Service from "@/utils/axios";

export const loginApi=(params) => {
    return Service({
        url: '/user/login',
        method: 'post',
        data: params,
    })
}

export const getListApi=() => {
    return Service({
        url: '/getList',
        method: 'post',
    })
}