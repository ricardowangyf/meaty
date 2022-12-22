import Vue from 'vue'
import Router from 'vue-router'

const HomePage = () => import('../view/HomePage.vue')
const NotFound = () => import('../view/NotFound.vue')
const HomeAll = () => import('../components/HomeAll.vue')
const CommUnity = () => import('../view/CommUnity.vue')


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            // redirect: '/homepage/all',
            component: HomePage,
        },
        {
            path: '/HomeAll',
            name: '/HomeAll',
            component: HomeAll,
        },
        {
            name:'CommUnity',
            path:'/CommUnity',
            component: CommUnity
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
    console.log('===location====?',location)
    return originalPush.call(this, location).catch(err =>{
        console.log('==err======',err)    
       return err
    })
}
Vue.use(Router);