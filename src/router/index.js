import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/admission/login'
const admissionInit = () => import('@/components/admission/index')

Vue.use(Router)
var validator = {
  beforeEnter: (from, to, next) => {
    var x = prompt("Pass:");
    // if(isLoggedIn)(next();)else next('/login');
    if (x == '123') next();
    else next('/');
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      beforeEnter: (from, to, next) => {
        // if(isLoggedIn)next('/admission');
        // else next();
        next();
      },
    },
    {
      path: '/admission',
      name: 'admissionInit',
      component: admissionInit,
      ...validator,
    }
  ]
})
