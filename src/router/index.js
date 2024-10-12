import { createRouter, createWebHistory } from 'vue-router'
import business from '@/router/modules/business'
import system from '@/router/modules/system'

const routes = [
  {
    path: '',
    redirect: '/business'
  },
  ...business,
  ...system
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
