import Vue from 'vue';
import '@/core/ajax';
const ajax = Vue.prototype.$ajax;
const mapping = {
    unpass: -1,
    unknown: 0,
    pass: -1
};
class Cache {
    constructor() {
        this.map = {};
        this.result = {};
    }

    add({key, el, binding}) {
        const _this = this;
        const styleDisplay = el.style.display;
        if(!_this.map[key]) {
            _this.map[key] = [];
            ajax({url: 'urls', params: {url: binding.value.url, method: binding.value.method}}).then(res => {
                // isFalure为true，则验证没通过
                const isFalure = res.retCode !== 0 || !res.data;
                const name = isFalure ? 'unpass' : 'pass';
                _this.result[key] = mapping[name];
                _this.map[key].forEach(obj => {
                    _this[name]({
                        styleDisplay: styleDisplay,
                        el: obj.el,
                        binding: obj.binding
                    });
                });
            }, err => {
                console.log(err);
            });
        }
        el.style.display = 'none';
        _this.map[key].push({el, binding});
    }

    pass({styleDisplay, el, binding}) {
        const fnPass = binding.value.pass;
        if(fnPass) {
            fnPass();
        } else {
            el.style.display = styleDisplay;
        }
    }

    unpass({el, binding}) {
        const fnUnpass = binding.value.unpass;
        if(fnUnpass) {
            fnUnpass();
        } else {
            el.style.display = 'none';
        }
    }

    getResult(key) {
        return this.result[key] || mapping.unknown;
    }
}

const cache = new Cache();
Vue.directive('authResource', {
    bind(el, binding) {
        const url = binding.value.url || '';
        const method = binding.value.method || '';
        const key = [`url=${url}`, `method=${method}`].join('&');
        const result = cache.getResult(key);
        if(result === mapping.unpass) {
            cache.unpass({key, el, binding});
        } else if(result === mapping.unknown) {
            cache.add({key, el, binding});
        } else if(result === mapping.pass) {
            cache.pass({key, el, binding});
        }
    }
});
export default {};
