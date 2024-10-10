/**
 * 获取assets文件夹下的静态图片资源
 * @param url // 文件路径
 */
export const getAssetsFile = (url) => new URL(`../assets/images/${url}`, import.meta.url).href

/**
* 参数处理
* @param {*} params  参数
*/
export const tansParams = (params) => {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName]
    let part = encodeURIComponent(propName) + '='
    if (value !== null && value !== '' && typeof value !== 'undefined') {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && value[key] !== '' && typeof value[key] !== 'undefined') {
            let params = propName + '[' + key + ']'
            let subPart = encodeURIComponent(params) + '='
            result += subPart + encodeURIComponent(value[key]) + '&'
          }
        }
      } else {
        result += part + encodeURIComponent(value) + '&'
      }
    }
  }
  return result
}

