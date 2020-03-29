// 循环遍历数据对象的每个属性
// eslint-disable-next-line no-unused-vars
function observable(obj) {
    if(!obj || typeof obj !== 'object') {
        return;
    }
    const keys = Object.keys(obj);
    keys.forEach((key) => {
        defineReactive(obj, key, obj[key]);
    });
    return obj;
}

// 将对象的属性用 Object.defineProperty() 进行设置
function defineReactive(data, key, val) {
    const dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function getter() {
            if(Dep.target) {
                dep.addSub(Dep.target);
            }
            return val;
        },
        set: function setter(newVal) {
            if(newVal === val) {
                return;
            }
            val = newVal;
            dep.notify();
        }
    });
}

// 添加订阅器
function Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },
    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};
Dep.target = null;

// 实现订阅者
function Watcher(vm, exp, cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get(); // 将自己添加到订阅器的操作
}
Watcher.prototype = {
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        if(value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    get: function() {
        Dep.target = this; // 全局变量 订阅者 赋值
        var value = this.vm.data[this.exp]; // 强制执行监听器里的get函数
        Dep.target = null; // 全局变量 订阅者 释放
        return value;
    }
};

// 解析器 Compile 实现
// eslint-disable-next-line no-unused-vars
function compileText(node, exp) {
    var self = this;
    var initText = this.vm[exp]; // 获取属性值
    this.updateText(node, initText); // dom 更新节点文本值
    // 将这个指令初始化为一个订阅者，后续 exp 改变时，就会触发这个更新回调，从而更新视图
    // eslint-disable-next-line no-new
    new Watcher(this.vm, exp, function(value) {
        self.updateText(node, value);
    });
}
