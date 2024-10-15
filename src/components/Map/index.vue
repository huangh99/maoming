<template>
  <div class="map-container">
    <div id="map"></div>
    <ToolBarComponent />
    <FooterBarComponent />
    <TrawlerInfoWIndowComponent />
  </div>

</template>
<script setup>
import { onMounted } from 'vue'
import * as maptalks from 'maptalks'
import GlobalMap from './js/GlobalMap'
import useMapStore from '@/store/modules/map'
import ToolBarComponent from './ToolBar/index.vue'
import FooterBarComponent from './FooterBar/index.vue'
import TrawlerInfoWIndowComponent from './InfoWindow/Trawler/index.vue'

const mapStore = useMapStore()

const initMap = () => {
  const mapDom = document.getElementById('map')

  const globalMap = new GlobalMap(mapDom)

  const point = new maptalks.Marker(
    [ 111.058597, 21.40198 ],
    {
      cursor: 'pointer',
      symbol: {
        'markerType': 'triangle',
        'markerFill': 'rgb(135,196,240)',
        'markerFillOpacity': 1,
        'markerLineColor': '#34495e',
        'markerLineWidth': 1,
        'markerLineOpacity': 1,
        'markerLineDasharray': [],
        'markerWidth': 10,
        'markerHeight': 15,
        'markerDx': 0,
        'markerDy': 0,
        'markerOpacity': 1
      }
    }
  )

  point.on('click', () => {
    mapStore.updateInfoWindow(true)
  })

  new maptalks.VectorLayer('vector', point).addTo(globalMap.map)

}

onMounted(() => {
  initMap()
})

</script>

<style lang="scss" scoped>
.map-container {
  width: 100%;
  height: 100%;

  #map {
    width: 100%;
    height: 100%;
  }
}
</style>
