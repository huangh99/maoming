const menu = [
  {
    label: '系统设置',
    value: 'system',
    icon: '',
    children: [
      {
        label: '用户管理',
        value: 'user-manage',
        path: '/system/user-manage'
      },
      {
        label: '角色管理',
        value: 'role-manage',
        path: '/system/role-manage'
      },
      {
        label: '菜单管理',
        value: 'menu-manage',
        path: '/system/menu-manage'
      },
      {
        label: '系统日志',
        value: 'log-manage',
        path: '/system/log-manage'
      }
    ]
  }
]

export {
  menu
}