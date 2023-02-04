import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component:  () => import('../view/HomePage.vue') ,
        },
        {
            path: '/HomeAll',
            name: '/homeall',
            component: () => import('../components/HomeAll.vue'),
        },
        {
            name: 'CommUnity',
            path: '/community',
            component: () => import('../view/CommUnity.vue')
        },
        {
            name: 'MeatyDetali',
            path: '/meatydetali',
            component: () => import ('../view/meatydetali.vue'),
        },
        {
            name: 'shopcenter',
            path: '/shopcenter',
            component:  () => import('../view/shopcenter.vue'),
        },
        {
            path: '*',
            name: '404',
            component: () => import('../view/NotFound.vue')
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