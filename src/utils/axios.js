//放置请求接口
const url = 'http://localhost:8081/'
import axios from "axios";

const Service = axios.create({
    baseURL:url,
    // 定义统一的请求头
    time : 10000
})

// 请求拦截器
Service.interceptors.request.use(
    function(config){
        config.headers.common['token'] = localStorage.getItem("token")===null?null:localStorage.getItem("token");
        return config;
    },
    function (error){
        return error;
    })

// 响应拦截器
Service.interceptors.response.use(
    function(response){
        console.log(response);
        const dataAxios = response.data;
        return dataAxios;
    },
    function (error){
        return error;
    })

export default Service;