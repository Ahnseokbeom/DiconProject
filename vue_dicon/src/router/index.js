import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainPage from '../views/mainPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: mainPage
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: () => import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
  },
  {
    path: '/GameAos',
    name: 'GameAos',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameAos.vue')
  },
  {
    path: '/GameFps',
    name: 'GameFps',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameFps.vue')
  },{
    path: '/GaMe',
    name: 'GaMe',
    component: () => import(/* webpackChunkName: "about" */ '../views/GaMe.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
