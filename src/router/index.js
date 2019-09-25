import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/homePage'
import AddTestpage from '@/views/addTestpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/AddTestpage',
      name: 'AddTestpage',
      component: AddTestpage,
      meta: {
        requireAuth: true     //做路由检测拦截
      },
    }
  ]
})
