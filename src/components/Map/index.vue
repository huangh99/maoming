<template>
  <div class="map-container">
    <div id="map"></div>
    <ToolBarComponent/>
    <FooterBarComponent/>
  </div>

</template>
<script setup>
import { onMounted } from 'vue'
import GlobalMap from './js/GlobalMap.js'
import ToolBarComponent from './ToolBar/index.vue'
import FooterBarComponent from './FooterBar/index.vue'

const initMap = () => {
  // new maptalks.Map('map', {
  //   center: [120.086,35.884],
  //   zoom: 6,
  //   maxZoom: 18,
  //   minZoom: 1,
  //   attribution: '',
  //   baseLayer: new maptalks.TileLayer('base', {
  //     urlTemplate: 'http://inner.qdlimap.cn:9999/gisAssistant/wmts/grid_tile/tianditu/vec_w/{z}/{y}/{x}'
  //   })
  // })
  const mapDom = document.getElementById('map')

  new GlobalMap(mapDom)

}

onMounted(() => {
  initMap()
})

</script>

<style lang="scss" scoped>
.map-container{
  width: 100%;
  height: 100%;

  #map{
    width: 100%;
    height: 100%;
  }
}
</style>
