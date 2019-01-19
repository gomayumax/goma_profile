import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Career from '@/components/Career'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
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
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})
