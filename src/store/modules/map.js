import { defineStore } from 'pinia'

const useMapStore = defineStore(
  'map',
  {
    state: () => ({
      infoWindow: {
        visible: false,
        option: {}
      }
    }),
    actions: {
      updateInfoWindow(visible = true, option = {}) {
        this.infoWindow.option = option
        this.infoWindow.visible = visible
      }
    }
  })

export default useMapStore
