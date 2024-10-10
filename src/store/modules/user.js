import { defineStore } from 'pinia'
import { login} from '@/api/login'

const useUserStore = defineStore(
  'user',
  {
    state: () => ({
      token: ''
    }),
    actions: {
      // 登录
      login() {
        return new Promise((resolve, reject) => {
          login().then(res => {
            this.token = res.token
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      }
    }
  })

export default useUserStore
