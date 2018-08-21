import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Detail from '@/components/detail/Detail'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/city',
        name: 'City',
        component: City
    }, {
        path: '/detail/:id',
        name: 'Deatil',
        component: Detail
    }],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})