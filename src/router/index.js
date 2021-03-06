import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from  '../pages/home.vue'
import resume from '../components/resume.vue'
import basetable from '../pages/basetable.vue'
import charts from '../components/charts.vue'
import register from '../pages/register.vue'
import mainActive from '../pages/mainActive.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: home,
      children: [
        {
          path: '/home/',
          redirect: '/home/resume',
          component: resume,
          children: [{
            path: '/home/resume/',
          }]
        },
        {
          path: '/home/basetable',
          component: basetable
        },
        {
          path: '/home/charts',
          component: charts
        },
        {
          path: '/home/register',
          component: register
        },
        {
          path: '/home/mainActive',
          component: mainActive
        }
      ]
    }
  ]
})
