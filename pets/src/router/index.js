import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout/layout'
import Home from '@/view/Home/home'
import About from '@/view/About/about'
import Show from '@/view/Show/show'
import Careful from '@/view/Careful/careful'
import Contact from '@/view/Contact/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: 'home',
      children: '/home',
      children: [
        {
          name: 'Home',
          path:'home',
          component: Home
        }
      ]
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: 'about',
      children: '/about',
      children: [
        {
          name: 'About',
          path:'about',
          component: About
        }
      ]
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: 'show',
      children: '/show',
      children: [
        {
          name: 'Show',
          path:'show',
          component: Show
        }
      ]
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: 'careful',
      children: '/careful',
      children: [
        {
          name: 'Careful',
          path:'careful',
          component: Careful
        }
      ]
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: 'contact',
      children: '/contact',
      children: [
        {
          name: 'Contact',
          path:'contact',
          component: Contact
        }
      ]
    }
  ]
})
