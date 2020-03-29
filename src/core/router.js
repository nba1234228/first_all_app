import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from '../generate/route';
import store from '../generate/store';
// routerConfig.push({ path: '/', redirect: { name: '/home/Home' } });// 添加默认路径

Vue.use(Router);

const router = new Router({
    routes: routerConfig
});

router.beforeEach((to, from, next) => {
    if(to.meta.requireAuth) {
        if(store.state.home.token) {
            next();
        } else {
            next({path: '/home/login', query: {redirect: to.fullPath}});
        }
    } else {
        next();
    }
});

export default router;
