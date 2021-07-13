import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddComponente from '@/components/addComponent'
import Balenciaga from '@/components/Balenciaga'
import Burberry from '@/components/Burberry'
import Gucci  from '@/components/Gucci'
import Givenchy from '@/components/Givenchy'
import ComponentOne from '@/components/Component'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/component',
      name: 'AddComponente',
      component: AddComponente
    },
    {
      path: '/component/balenciaga',
      name: 'Balenciaga',
      component: Balenciaga
    },
    {
      path: '/component/burberrry',
      name: 'Burberry',
      component: Burberry
    },
    {
      path: '/component/gucci',
      name: 'Gucci',
      component: Gucci
    },
    {
      path: '/component/givenchy',
      name: 'Givenchy',
      component: Givenchy
    },
    {
      path: '/components/:id',
      name: 'Component',
      component: ComponentOne
    }
  ]
})
