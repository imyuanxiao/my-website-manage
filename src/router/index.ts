import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Login from "views/Login.vue";
import DashBoard from "views/Home/DashBoard.vue";
import Article from "views/Home/Article.vue";
import store from '../store'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: '/',
        name: "Index",
        component: DashBoard,
    },
    {
        path: '/article',
        name: "Article",
        component: Article,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isUserLoggedIn = store.getters.isUserLoggedIn
    // if (to.path !== '/login' && !isUserLoggedIn) {
    //     next('/login')
    // } else {
    //     next()
    // }
    if (to.path !== '/login' && !isUserLoggedIn) {
        // 如果用户没有登录且访问的不是登录页，则跳转到登录页，并记录当前路由路径
        next({ path: '/login', query: { redirect: from.fullPath } })
    } else if (to.path === '/login' && isUserLoggedIn) {
        // 如果用户已经登录且访问的是登录页，则跳转到首页
        next('/')
    } else {
        // 如果用户已经登录或者访问的是登录页，则直接跳转到目标路由
        next()
    }
})

export default router;
