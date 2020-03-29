import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import home from '../vuex/home';

export default new Vuex.Store({
    modules: {
        home
    }
});