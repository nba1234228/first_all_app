export default {
    login(state, data) {
        sessionStorage.setItem('token', data);
        state.token = data;
    },
    logout(state, data) {
        sessionStorage.removeItem('token');
        state.token = null;
    }
};
