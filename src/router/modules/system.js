export default [
  {
    path: '/system',
    name: 'app-system',
    meta: {
      auth: false,
      title: '系统设置'
    },
    component: () => import('@/views/system/index.vue'),
    children: [
      {
        path: 'user-manage',
        name: 'user-manage',
        component: () => import('@/views/system/user/index.vue'),
        meta: {
          auth: false,
          title: '用户管理'
        }
      },
      {
        path: 'role-manage',
        name: 'role-manage',
        component: () => import('@/views/system/role/index.vue'),
        meta: {
          auth: false,
          title: '角色管理'
        }
      },
      {
        path: 'menu-manage',
        name: 'menu-manage',
        component: () => import('@/views/system/menu/index.vue'),
        meta: {
          auth: false,
          title: '菜单管理'
        }
      },
      {
        path: 'log-manage',
        name: 'log-manage',
        component: () => import('@/views/system/log/index.vue'),
        meta: {
          auth: false,
          title: '系统日志'
        }
      }
    ]
  }
]
