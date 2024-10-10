export default [
  {
    path: '/business',
    name: 'app-business',
    component: () => import('@/views/business/index.vue'),
    children: [
      {
        path: 'trawler-manage',
        name: 'trawler-manage',
        component: () => import('@/views/business/trawler/manage/index.vue'),
        meta: {
          auth: false,
          title: '渔船信息'
        }
      }
    ]
  }
]
