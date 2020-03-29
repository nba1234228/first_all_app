// import Vue from 'vue';
// import Router from 'vue-router';
// import Home from '@/pages/home/Home';
// import store from '../generate/store';
//
// Vue.use(Router);
//
// const router = new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: Home
//         },
//         {
//             path: '/earning',
//             name: 'earning',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/pages/home/Earning'], resolve)
//         },
//         {
//             path: '/card',
//             name: 'card',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/pages/home/Card'], resolve)
//         },
//         {
//             path: '/recharge',
//             name: 'recharge',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/card/Recharge'], resolve)
//         },
//         {
//             path: '/exchange',
//             name: 'exchange',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/card/Exchange'], resolve)
//         },
//         {
//             path: '/extract',
//             name: 'extract',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/card/Extract'], resolve)
//         },
//         {
//             path: '/mine',
//             name: 'mine',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/pages/home/Mine'], resolve)
//         },
//         {
//             path: '/login',
//             name: 'login',
//             component: resolve => require(['@/pages/home/Login'], resolve)
//         },
//         {
//             path: '/register',
//             name: 'register',
//             component: resolve => require(['@/pages/home/Register'], resolve)
//         },
//         {
//             path: '/personMsg',
//             name: 'personMsg',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/mine/PersonMsg'], resolve)
//         },
//         {
//             path: '/updateTel',
//             name: 'updateTel',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/mine/UpdateTel'], resolve)
//         },
//         {
//             path: '/aboutUs',
//             name: 'aboutUs',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/mine/AboutUs'], resolve)
//         },
//         {
//             path: '/setting',
//             name: 'setting',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/mine/Setting'], resolve)
//         },
//         {
//             path: '/notice',
//             name: 'notice',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/mine/Notice'], resolve)
//         },
//         {
//             path: '/noticeDetail',
//             name: 'noticeDetail',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/mine/NoticeDetail'], resolve)
//         },
//         {
//             path: '/team',
//             name: 'team',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/mine/Team'], resolve)
//         },
//         {
//             path: '/share',
//             name: 'share',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/mine/Share'], resolve)
//         },
//         {
//             path: '/warehouse',
//             name: 'warehouse',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/mine/Warehouse'], resolve)
//         },
//         {
//             path: '/updateLoginPsd',
//             name: 'updateLoginPsd',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/mine/UpdateLoginPsd'], resolve)
//         },
//         {
//             path: '/updatePayPsd',
//             name: 'updatePayPsd',
//             meta: {
//                 requireAuth: true
//             },
//             component: resolve => require(['@/components/mine/UpdatePayPsd'], resolve)
//         }
//     ]
// });
//
// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {
//         if (store.state.home.token) {
//             next();
//         } else {
//             next({ path: '/login', query: { redirect: to.fullPath } });
//         }
//     } else {
//         next();
//     }
//     next();
// });
//
// export default router;
