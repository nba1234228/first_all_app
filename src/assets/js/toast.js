import Vue from 'vue';
import Toast from '@/components/Toast.vue';
const ToastConstructor = Vue.extend(Toast);

const myToast = (text, duration) => {
    const toastDom = new ToastConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(toastDom.$el);
    toastDom.text = text;
    toastDom.duration = duration;

    // 在指定 duration 之后让 toast消失
    setTimeout(() => {
        toastDom.isShow = false;
    }, toastDom.duration);
};

export default myToast;
