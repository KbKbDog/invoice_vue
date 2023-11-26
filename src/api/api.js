import Service from "@/utils/axios";

const get = (config) =>{
    return Service({
        ...config,
        method: 'get',
        params: config.data
    })
}

const post = (config) => {
    return Service({
        ...config,
        method: 'post',
        params: config.data
    })
}

const loginApi=(data) => {
    return post({
        url: '/login',
        data
    })
}
export default {get,post,loginApi}