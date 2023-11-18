//放置请求接口
const url = 'http://localhost:8081/'
import axios from "axios";

const Service = axios.create({
    baseURL:url,
    // 定义统一的请求头
    time : 10000
})

// 请求拦截器
Service.interceptors.request.use((config))