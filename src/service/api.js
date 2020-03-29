import Vue from 'vue';
import '@/core/ajax';
const ajax = Vue.prototype.$ajax;
// const baseUrl = 'http://45bb.nat123.cc:35555';
const baseUrl = 'http://192.168.0.103:9000';
// const base_url = '/api';
const vue = new Vue();
const urls = {
    bannerImageUrl: `${baseUrl}/banners`,
    loginUrl: `${baseUrl}/login`,
    registerUrl: `${baseUrl}/register`,
    userMsgUrl: `${baseUrl}/users`
};
const api = {
    getUser(data) {
        return ajax({url: urls.userMsgUrl, method: 'post', data: data}).then(res => {
            return res;
        }, err => {
            vue.$notify({type: 'warning', message: '服务器出错，请稍候再试！'});
            return err;
        });
    },
    login(data) {
        return ajax({url: urls.loginUrl, method: 'post', data: data}).then(res => {
            return res;
        }, err => {
            vue.$notify({type: 'warning', message: '服务器出错，请稍候再试！'});
            return err;
        });
    },
    register(data) {
        return ajax({url: urls.registerUrl, method: 'post', data: data}).then(res => {
            return res;
        }, err => {
            vue.$notify({type: 'warning', message: '服务器出错，请稍候再试！'});
            return err;
        });
    },
    getBannerImage(data) {
        return ajax({url: urls.bannerImageUrl, method: 'post', data: data}).then(res => {
            return res;
        }, err => {
            vue.$notify({type: 'warning', message: '服务器出错，请稍候再试！'});
            return err;
        });
    }
};

export default api;
