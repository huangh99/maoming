const menu = [
  {
    label: '渔船管理',
    value: 'trawler-manage',
    icon: '',
    children: [
      {
        label: '渔船信息',
        value: 'trawler-info',
        path: ''
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
        path: ''
      },
      {
        label: '设备分组',
        value: 'device-group',
        path: ''
      },
      {
        label: '设备关注',
        value: 'device-focus',
        path: ''
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
        path: ''
      },
      {
        label: '报警通知设置',
        value: 'alarm-notice',
        path: ''
      },
      {
        label: '离线报警设置',
        value: 'alarm-offline',
        path: ''
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
        path: ''
      },
      {
        label: '重点监控',
        value: 'trawler-focus',
        path: ''
      },
      {
        label: '多船轨迹回放',
        value: 'trawler-path',
        path: ''
      }
    ]
  }
]

export {
  menu
}