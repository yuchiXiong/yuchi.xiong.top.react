/*
    * 单例axios示例
    1. 公共配置
    2. 拦截器
*/

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://blog.xiongyuchi.top'
});

instance.interceptors.request.use(config => {
    return config;
});

instance.interceptors.response.use(config => {
    return config.data;
});

export default instance;