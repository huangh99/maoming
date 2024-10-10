/**
 * window.localStorage 浏览器永久缓存
 * @method set 设置永久缓存
 * @method get 获取永久缓存
 * @method remove 移除永久缓存
 * @method clear 移除全部永久缓存
 */
export const Local = {
  // 设置永久缓存
  set(key, val) {
    window.localStorage.setItem(key, JSON.stringify(val))
  },
  // 获取永久缓存
  get(key) {
    const json = window.localStorage.getItem(key)
    return JSON.parse(json)
  },
  // 移除永久缓存
  remove(key) {
    window.localStorage.removeItem(key)
  },
  // 移除全部永久缓存
  clear() {
    window.localStorage.clear()
  }
}

/**
 * 获取menu
 * @returns {any|null}
 */
export const getMenu = () => {
  const data = Local.get('menus')
  const business = data.filter((item) => item.powerCode !== 'trawler')
  // const trawler = data.find((item) => item.powerCode === 'trawler')
  const businessMenu = business.map((item) => ({
    children: item.children.map((child) => ({
      label: child.powerName,
      path: child.powerUrl,
      value: child.powerCode
    })),
    icon: item.powerIcon,
    label: item.powerName,
    loadDefaultIcons: true,
    value: item.powerCode
  }))

  // const trawlerMenu = trawler ? trawler.children.map((item) => ({
  //         icon: item.powerIcon,
  //         label: item.powerName,
  //         loadDefaultIcons: !item.powerIcon.startsWith('icon-'),
  //         path: item.powerUrl,
  //         value: item.powerUrl
  //     })) : []
  // return {
  //     business: businessMenu, // 业务系统的菜单
  //     trawler: trawlerMenu // 渔船动态系统的菜单
  // }

  return businessMenu
}

/**
 * 移除menu
 */
export const removeMenu = () => {
  localStorage.removeItem('menu')
}
