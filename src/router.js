import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Index from './views/Index.vue'
import Reg from './views/Reg.vue'
import Header from './components/Header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/header',
      component:Header
    },
    {
      path:'/reg',
      component:Reg
    },
    {
      path:'/index',
      component:Index
    },
    {
      path: '/login',  
      component:Login
    },
    {
      path: '/',
     redirect:'/header'
    }
  ]
})
