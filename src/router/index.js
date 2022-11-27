import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../view/NotFound.vue'
import HomePage from '../view/HomePage.vue'


export default new Router({
    mode: 'history',
    linkActiveClass: 'isactive',
    routes: [
        {
            path: '/',
            redirect: '/homepage',
            component: HomePage,
            children: [
                // {
                //     path: '/list/:type',
                //     component: Items,
                //     props: true
                // },
            ]
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
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router);