export default [
  {
    path: '/business',
    name: 'app-business',
    component: () => import('@/views/business/index.vue'),
    children: [
      {
        path: 'port-manage',
        name: 'port-manage',
        component: () => import('@/views/business/port/archive/index.vue'),
        meta: {
          auth: false,
          title: '渔港管理'
        }
      }
    ]
  }
]
