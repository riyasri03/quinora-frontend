import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import login from '@/views/login.vue'
import categories from '@/views/categories.vue'
import questions from '@/views/questions.vue'
import questionAnswer from '@/views/questionAnswer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
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
    path: '/questions',
    name: 'questions',
    component: questions
  },
  {
    path: '/questionAnswer',
    name: 'questionAnswer',
    component: questionAnswer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
