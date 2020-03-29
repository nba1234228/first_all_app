import Vue from 'vue';
import axios from 'axios';
// import {Loading, Message} from 'element-ui';
import store from '@/generate/store';
import router from '@/routers/router';
import env from '../core/env';
// import {Loading} from "vant";

const service = axios.create({
    baseUrl: env.apiPrefixUrl,
    withCredentials: true
});
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
service.defaults.timeout = 30000;
service.defaults.adapter.retry = 4;
service.defaults.adapter.retryDelay = 3000;

// 添加请求拦截
service.interceptors.request.use(function(config) {
    // console.log(config);
    if(store.state.token) {
        config.headers.authorization = store.state.token;
    }
    config.params = config.params || {};
    config.params = Object.assign(config.params, {ts: Date.now()});
    return config;
}, function(error) {
    return Promise.reject(error);
});

// 添加响应拦截
service.interceptors.response.use(function(response) {
    // if (response['data'][env['responseCodeName']] === env['noLoginCode']) {
    //     window.location.href = response['data']['data']['redirect'];
    // }
    if(response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}, function(error) {
    if(error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '请求参数错误';
                break;
            case 401:
                error.message = '未授权，请登录';
                // 返回 401 清除token信息并跳转到登录页面
                store.commit('logout');
                router.replace({
                    path: '/login',
                    query: {redirect: router.currentRoute.fullPath}
                });
                break;

            case 403:
                error.message = '跨域拒绝访问';
                break;

            case 404:
                error.message = `请求地址出错: ${error.response.config.url}`;
                break;

            case 408:
                error.message = '请求超时';
                break;

            case 500:
                error.message = '服务器内部错误';
                break;

            case 501:
                error.message = '服务未实现';
                break;

            case 502:
                error.message = '网关错误';
                break;

            case 503:
                error.message = '服务不可用';
                break;

            case 504:
                error.message = '网关超时';
                break;

            case 505:
                error.message = 'HTTP版本不受支持';
                break;

            default:
        }
    }
    const config = error.config;
    if(!config || !config.adapter.retry) {
        return Promise.reject(error);
    }
    config.adapter.retryCount = config.adapter.retryCount || 0;
    if(config.adapter.retryCount >= config.adapter.retry) {
        return Promise.reject(error);
    }
    config.adapter.retryCount += 1;
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.adapter.retryDelay || 1000);
    });
    return backoff.then(function() {
        return service(config);
    });
});

Vue.prototype.$axios = axios;
Vue.prototype.$ajax = (option) => {
    // let loadingInstance = Loading.service({
    //     lock: true,
    //     text: 'loading',
    //     spinner: 'el-icon-loading',
    //     background: 'rgba(0, 0, 0, 0.7)',
    // });
    return new Promise((resolve, reject) => {
        const config = Object.assign({}, option);
        service(config).then((res) => {
            // loadingInstance.close();
            resolve(res.data);
        }, (err) => {
            console.log(err);
            // loadingInstance.close();
            reject(err);
        }).catch((err) => {
            console.log(err);
            // loadingInstance.close();
            reject(err);
        });
    });
};

export default service;
