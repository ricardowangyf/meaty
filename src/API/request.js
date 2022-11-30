// -request.js
import axios from 'axios'
//1.利用axios对象的方法create，去创建一个axios实际
//2.request就是axios，只不过稍微配置一下
const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中出现api
    baseURL: "/api",
    //代表请求超时的时间5s
    timeout: 100.
})

//请求拦截器：在发请发之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
        //config:配置对象，对象里面有一个属性很重要，headers请求
        return config
    })
    //响应拦截器
requests.interceptors.response.use((res) => {
    return res.data
}, () => {
    return Promise.reject(new Error('faile'))
})
export default axios