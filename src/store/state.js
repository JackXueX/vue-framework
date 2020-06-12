const state = {
    token: localStorage.getItem('token') ? localStorage.getItem('token'):'',
    showAttention: false,
};

export default state;