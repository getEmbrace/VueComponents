import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home.vue')
const Info = () => import('views/info/Info.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/info/:type',
        component: Info
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
