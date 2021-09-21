import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ColaboradorList from "../components/ColaboradorList"
import ProjetoList from "../components/ProjetoList"
import TimeList from "../components/TimeList"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/colaboradores',
    name: 'ColaboradorList',
    component: ColaboradorList
  },
  {
    path: '/times',
    name: 'TimeList',
    component: TimeList
  },
  {
    path: '/projetos',
    name: 'ProjetoList',
    component: ProjetoList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
