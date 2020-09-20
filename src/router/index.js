import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About'
import Article from '@/views/Article'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import Add from '@/views/Admin/Add'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component:About
  },
  {
    path:'/article/:id',
    name:'Article',
    component:Article
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/admin',
    name:'Admin',
    component:Admin,
    children:[
      {
        path:'/',
        name:'Admin-Home',
        component:Admin
      },
      {
        path:'/add',
        name:'Admin_Add',
        component:Add
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
