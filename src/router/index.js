import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Career from '@/components/Career'
require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/career',
      name: 'Career',
      component: Career
    }
  ]
})
