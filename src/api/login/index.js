import request from '@/utils/request'

/**
 * 用户登录
 * @param data
 */
export const login = (data) => {
  return request({
    url: '/login',
    headers: {
      isToken: false,
      repeatSubmit: false
    },
    method: 'post',
    data: data
  })
}