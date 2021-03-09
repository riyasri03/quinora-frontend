import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login.vue'
import categories from '@/views/categories.vue'
import profile from '@/views/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/categories',
    name: 'categories',
    component: categories
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
