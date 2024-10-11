const menu = [
  {
    label: '渔船管理',
    value: 'trawler-manage',
    icon: '',
    children: [
      {
        label: '渔船信息',
        value: 'trawler-info',
        path: '/business/trawler-manage'
      }
    ]
  },
  {
    label: '终端管理',
    value: 'terminal-manage',
    icon: '',
    children: [
      {
        label: '设备管理',
        value: 'device-manage',
        path: '/business/device-manage'
      },
      {
        label: '设备分组',
        value: 'device-group',
        path: '/business/device-group'
      },
      {
        label: '设备关注',
        value: 'device-focus',
        path: '/business/device-focus'
      }
    ]
  },
  {
    label: '智能报警',
    value: 'alarm',
    icon: '',
    children: [
      {
        label: '报警信息',
        value: 'alarm-info',
        path: '/business/alarm-info'
      },
      {
        label: '报警通知设置',
        value: 'alarm-notice',
        path: '/business/alarm-notice'
      },
      {
        label: '离线报警设置',
        value: 'alarm-offline',
        path: '/business/alarm-offline'
      }
    ]
  },
  {
    label: '常用工具',
    value: 'tool',
    icon: '',
    children: [
      {
        label: '电子围栏划定',
        value: 'fence-setting',
        path: '/business/fence-setting'
      },
      {
        label: '重点监控',
        value: 'trawler-focus',
        path: '/business/trawler-focus'
      },
      {
        label: '多船轨迹回放',
        value: 'trawler-path',
        path: '/business/trawler-path'
      }
    ]
  }
]

export {
  menu
}