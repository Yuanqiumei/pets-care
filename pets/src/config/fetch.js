
import axios from "axios"

const service = axios.create({
    baseURL: 'http://party.test.alexjing.cn/',//请求路径
    timeout: 15000
})

//请求拦截器
service.interceptors.request.use(
    config => {
   //在请求发送之前做一些处理
   const token = util.cookies.get('token')
   //让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
   config.headers['token'] = token
    return config
}, error => {
    console.log(error)
})
//配置响应拦截器
service.interceptors.response.use(response => response, error => {
    const response = error.response

    if (response.status === 401) {
        console.log(response)
    }
    if (response.status === 403) {
        console.log(response)
    }
})

export default service