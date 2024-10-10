export default [
  {
    path: 'screen',
    component: () => import('@/views/screen/index.vue'),
    meta: { auth: false },
    children: []
  }
]
