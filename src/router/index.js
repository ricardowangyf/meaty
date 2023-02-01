import Vue from 'vue'
import Router from 'vue-router'

const HomePage = () => import('../view/HomePage.vue') //主页
const NotFound = () => import('../view/NotFound.vue') //404页面
const HomeAll = () => import('../components/HomeAll.vue') //多肉植物组件
const CommUnity = () => import('../view/CommUnity.vue') //社区



export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: HomePage,
        },
        {
            path: '/HomeAll',
            name: '/HomeAll',
            component: HomeAll,
        },
        {
            name: 'CommUnity',
            path: '/CommUnity',
            component: CommUnity
        },
        {
            name: 'shopcenter',
            path: '/shopcenter',
            component:  () => import('../view/shopcenter.vue'),
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        },
    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => {
        return err
    })
}

Vue.use(Router);