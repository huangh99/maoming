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
      },
      {
        path: 'device-manage',
        name: 'device-manage',
        component: () => import('@/views/business/terminal/manage/index.vue'),
        meta: {
          auth: false,
          title: '设备管理'
        }
      },
      {
        path: 'device-group',
        name: 'device-group',
        component: () => import('@/views/business/terminal/grouping/index.vue'),
        meta: {
          auth: false,
          title: '设备分组'
        }
      },
      {
        path: 'device-focus',
        name: 'device-focus',
        component: () => import('@/views/business/terminal/focus/index.vue'),
        meta: {
          auth: false,
          title: '设备关注'
        }
      },
      {
        path: 'alarm-info',
        name: 'alarm-info',
        component: () => import('@/views/business/alarm/info/index.vue'),
        meta: {
          auth: false,
          title: '报警信息'
        }
      },
      {
        path: 'alarm-notice',
        name: 'alarm-notice',
        component: () => import('@/views/business/alarm/notice/index.vue'),
        meta: {
          auth: false,
          title: '报警通知设置'
        }
      },
      {
        path: 'alarm-offline',
        name: 'alarm-offline',
        component: () => import('@/views/business/alarm/offline/index.vue'),
        meta: {
          auth: false,
          title: '离线报警设置'
        }
      },
      {
        path: 'fence-setting',
        name: 'fence-setting',
        component: () => import('@/views/business/tools/fence/index.vue'),
        meta: {
          auth: false,
          title: '电子围栏划定'
        }
      },
      {
        path: 'trawler-focus',
        name: 'trawler-focus',
        component: () => import('@/views/business/tools/focus/index.vue'),
        meta: {
          auth: false,
          title: '重点监控'
        }
      },
      {
        path: 'trawler-path',
        name: 'trawler-path',
        component: () => import('@/views/business/tools/playback/index.vue'),
        meta: {
          auth: false,
          title: '多船轨迹回放'
        }
      }
    ]
  }
]
