export default {
    login({state, commit, rootState}, data) {
        commit('login', data);
    },
    logout({state, commit, rootState}, data) {
        commit('logout', data);
    }
};
