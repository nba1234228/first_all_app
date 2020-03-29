import Vue from 'vue';

const bus = new Vue();
export default {
    on(eventName, handler, scope = null, once = false) {
        if(once) {
            bus.$once(eventName, handler);
            return;
        }
        bus.$on(eventName, handler);
        if(scope) {
            const originalDestroy = scope.$destroy;
            scope.$destroy = function() {
                bus.$off(eventName, handler);
                originalDestroy.call(this);
            };
        }
    },
    emit(eventName, data = {}) {
        bus.$emit(eventName, data);
    }
};
