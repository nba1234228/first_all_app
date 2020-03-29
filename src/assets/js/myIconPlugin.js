// import {iconStatus} from '#/js/iconfig'
const iconStatus = {
    1: "<span class='icons iconfont icon-fangzi'></span>",
    2: "<span class='icons iconfont icon-zhoubianyou'></span>",
    3: "<span class='icons iconfont icon-fanhui'></span>",
    4: "<span class='icons iconfont icon-lvyou'></span>"
};

const myPlugin = {};
myPlugin.install = (Vue) => {
    Vue.mixin({
        filters: {
            $_filterIcon: (value) => {
                return iconStatus[value] || 'icon undefined';
            }
        }
    });
};

export default myPlugin;
