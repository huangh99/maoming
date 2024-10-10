import { createRouter, createWebHistory } from 'vue-router'
import business from '@/router/modules/business'
import screen from '@/router/modules/screen'
import { Local } from '@/utils/storage'

const routes = [
  {
    path: '',
    redirect: '/screen'

  },
  {
    path: '/trawler',
    name: 'trawler',
    component: () => import('@/views/screen/index.vue'),
    // meta: { auth: false }
  },
...screen,
// ...business,
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
  // const token = Local.get('token')
  // if (to.meta.auth) {
  //   if (token) {
  //     next()
  //   } else {
  //     router.push('/login')
  //     Local.clear()
  //   }
  // } else {
  //   next()
  // }
// })

export default router
