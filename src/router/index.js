import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Class = () => import('views/class/Class')
const Gwc = () => import('views/gwc/Gwc')
const My = () => import('views/my/My')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/class',
    component: Class
  },
  {
    path: '/gwc',
    component: Gwc
  },
  {
    path: '/my',
    component: My
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router