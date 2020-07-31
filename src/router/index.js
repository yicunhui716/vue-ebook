import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
const ebook = () => import('../views/ebook/index')
const ebookreader = () => import('../components/ebook/EbookReader.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/ebook'
  },
  {
    path: '/ebook',
    component: ebook,
    children:[{
      path:':fileName',
      component:ebookreader
    }
      
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
