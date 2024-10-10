import { createRouter, createWebHistory } from 'vue-router'
import business from '@/router/modules/business'

const routes = [
  {
    path: '',
    redirect: '/business'
  },
  ...business
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   const token = ''
//   if (to.meta.auth) {
//     if (token) {
//       next()
//     } else {
//       location.href = '/login'
//     }
//   } else {
//     next()
//   }
// })

export default router
