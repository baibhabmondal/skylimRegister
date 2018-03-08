import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
const admissionInit = () => import('@/components/admission/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/admission',
      name: 'admissionInit',
      component: admissionInit
    }
  ]
})
