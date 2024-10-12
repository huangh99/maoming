import { defineStore } from 'pinia'

const useSystemStore = defineStore(
  'system',
  {
    state: () => ({
      isCollapse: false
    }),
    actions: {

    }
  })

export default useSystemStore
