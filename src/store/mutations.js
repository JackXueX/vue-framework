export default {
    setToken(state, token) {
        state.token = token;
        localStorage.token = token;

    },
    delToken(state) {
        state.token = '';
        localStorage.removeItem('token');
    },
};
