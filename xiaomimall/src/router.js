import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login.vue'
import Home from './pages/home.vue'
import Index from './pages/index.vue'

Vue.use(Router)

// 导出路由，并在man.js中引入
export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
            redirect: '/login',
            children: [
                {
                    path: '/login',
                    name:'login',
                    component: Login
                }
            ]
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                }
            ]

        }
    ]
})