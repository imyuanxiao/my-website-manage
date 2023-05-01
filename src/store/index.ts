import { createStore } from 'vuex';

const store = createStore({
    state: {
        isFold: true,
        loggedIn: false,
    },
    mutations: {
        login (state) {
            state.loggedIn = true // 用户登录成功后将 loggedIn 状态值设为 true
        },
        logout (state) {
            state.loggedIn = false // 用户退出登录后将 loggedIn 状态值设为 false
        },
        toggleFold(state) {
            state.isFold = !state.isFold;
        },
    },
    getters: {
        isUserLoggedIn: state => state.loggedIn // 获取用户登录状态的 getter 方法
    }
});


export default store;
