import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import reg from '@/pages/reg'
import login from '@/pages/login'
import detail from '@/pages/detail'
import cinema from '@/pages/cinema'
import seat from '@/pages/seat'
import user from '@/pages/user'
import order from '@/pages/order'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema
    },
    {
      path: '/seat',
      name: 'seat',
      component: seat
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
    ,
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
