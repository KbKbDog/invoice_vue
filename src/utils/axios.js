//放置请求接口
//const url = 'http://localhost:8081/api'
const url = '/api';
import axios from "axios";

const Service = axios.create({
    baseURL:url,
    // 定义统一的请求头
    time : 10000
})

// 请求拦截器
Service.interceptors.request.use(
    function(config){
      config.headers['token'] = localStorage.getItem("token")===null?null:localStorage.getItem("token");
        return config;
    },
    function (error){
        return error;
    })

// 响应拦截器
// 添加响应拦截器
Service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default Service;