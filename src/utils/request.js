/*
    * 单例axios示例
    1. 公共配置
    2. 拦截器
*/

import axios from 'axios';
import { message } from 'antd';

const instance = axios.create({
    baseURL: 'http://blog.xiongyuchi.top',
    headers: {
        'Accept': 'application/json'
    }
});

instance.interceptors.request.use(config => {
    if (config.method !== 'get') {
        let userToken = null;
        if (localStorage.getItem('user')) {
            userToken = JSON.parse(localStorage.getItem('user')).userToken;
        }
        config.headers['User-Token'] = userToken;
    }
    return config;
});

instance.interceptors.response.use(config => {
    return config.data;
}, err => {
    // * Http 401 给用户提示，并在3秒后跳转登录页
    if (err.response.status === 401) {
        message.error(`${err.response.data.message}，请登录重试！`, 3).then(() => {
            localStorage.removeItem('user');
            window.location.href = '/login';
        });
    } else {
        message.error(err.response.data.message);
        return err.response.data;
    }
});

export default instance;