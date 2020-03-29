import _home_home from '@/pages/home/Home';
    
export default [
    {
        path: '/home/card/Exchange',
        name: '/home/card/Exchange',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/card/Exchange'], resolve)
    },
    {
        path: '/home/card/Extract',
        name: '/home/card/Extract',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/card/Extract'], resolve)
    },
    {
        path: '/home/card/Recharge',
        name: '/home/card/Recharge',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/card/Recharge'], resolve)
    },
    {
        path: '/home/Card',
        name: '/home/Card',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/Card'], resolve)
    },
    {
        path: '/home/Earning',
        name: '/home/Earning',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/Earning'], resolve)
    },
    {
        path: '/home/home/Invest',
        name: '/home/home/Invest',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/home/Invest'], resolve)
    },
    {
        path: '/home/home/SecondPage',
        name: '/home/home/SecondPage',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/home/SecondPage'], resolve)
    },
    {
        path: '/',
        name: '/home/Home',
        component: _home_home
    },
    {
        path: '/home/Login',
        name: '/home/Login',
        component: resolve => require(['@/pages/home/Login'], resolve)
    },
    {
        path: '/home/mine/AboutUs',
        name: '/home/mine/AboutUs',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/mine/AboutUs'], resolve)
    },
    {
        path: '/home/mine/Notice',
        name: '/home/mine/Notice',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/mine/Notice'], resolve)
    },
    {
        path: '/home/mine/NoticeDetail',
        name: '/home/mine/NoticeDetail',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/mine/NoticeDetail'], resolve)
    },
    {
        path: '/home/mine/PersonMsg',
        name: '/home/mine/PersonMsg',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/mine/PersonMsg'], resolve)
    },
    {
        path: '/home/mine/Setting',
        name: '/home/mine/Setting',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/mine/Setting'], resolve)
    },
    {
        path: '/home/mine/Share',
        name: '/home/mine/Share',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/mine/Share'], resolve)
    },
    {
        path: '/home/mine/Team',
        name: '/home/mine/Team',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/mine/Team'], resolve)
    },
    {
        path: '/home/mine/UpdateLoginPsd',
        name: '/home/mine/UpdateLoginPsd',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/mine/UpdateLoginPsd'], resolve)
    },
    {
        path: '/home/mine/UpdatePayPsd',
        name: '/home/mine/UpdatePayPsd',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/mine/UpdatePayPsd'], resolve)
    },
    {
        path: '/home/mine/UpdateTel',
        name: '/home/mine/UpdateTel',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/mine/UpdateTel'], resolve)
    },
    {
        path: '/home/mine/Warehouse',
        name: '/home/mine/Warehouse',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/mine/Warehouse'], resolve)
    },
    {
        path: '/home/Mine',
        name: '/home/Mine',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages/home/Mine'], resolve)
    },
    {
        path: '/home/Register',
        name: '/home/Register',
        component: resolve => require(['@/pages/home/Register'], resolve)
    }
];