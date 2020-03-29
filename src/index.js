import Vue from 'vue';
import App from './App.vue';
// import i18n from './core/i18n';
import router from './core/router';
import 'babel-polyfill';
import 'es6-promise/auto';
import store from './generate/store';
import './core/ajax';
import './util/format';
import './diretive/index';
import Vant from 'vant';
import 'vant/lib/index.css';
// import VueJsonp from 'vue-jsonp';
// css
import '#/css/reset.css';
import '#/css/iconfont/iconfont.css';
// js
import FastClick from 'fastclick';
import setFontSize from '#/js/setFontSize';
FastClick.attach(document.body);
setFontSize();

// Vue.use(VueJsonp);
Vue.use(Vant);

Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
    router,
    store,
    // i18n,
    el: '#app',
    render: h => h(App)
});
