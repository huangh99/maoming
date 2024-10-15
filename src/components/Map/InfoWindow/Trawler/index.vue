<template>
  <div class="trawler-info-window" v-if="mapStore.infoWindow.visible">
    <div class="trawler-info-header">
      <span>粤茂滨渔54108</span>
      <el-icon @click="close"><Close /></el-icon>
    </div>
    <ul class="trawler-info-list">
      <li class="trawler-info-list-item" v-for="(item,index) in list" :key="index">
        <span class="label">{{ item.label }}:</span>
        <span class="value">{{ model[item.prop] }}</span>
      </li>
    </ul>
    <div class="trawler-info-button">
      <el-button type="primary">轨迹回放</el-button>
    </div>
  </div>

</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { Close } from '@element-plus/icons-vue'
import useMapStore from '@/store/modules/map'
// import GlobalMap from './js/GlobalMap.js'
const mapStore = useMapStore()

const list = [
  {
    label: '终端号',
    prop: 'terminalCode'
  },
  {
    label: '渔船所有人',
    prop: 'ownerName'
  },
  {
    label: '航速(节)',
    prop: 'speed'
  },
  {
    label: '所有人电话',
    prop: 'ownerTel'
  },
  {
    label: '航向(度)',
    prop: 'sog'
  },
  {
    label: '船舶类型',
    prop: 'shipType'
  },
  {
    label: '功率(千瓦)',
    prop: 'power'
  },
  {
    label: '船籍港',
    prop: 'portName'
  },
  {
    label: '经度',
    prop: 'longitude'
  },
  {
    label: '纬度',
    prop: 'latitude'
  },
  {
    label: '定位时间',
    prop: 'locateTime'
  }
]

const model = reactive({
  terminalCode: '14309455972',
  ownerName: '茂名市电白区洛浦街南浦西一村股份合作经济社',
  speed: '0.0',
  ownerTel: '84583202',
  sog: '0.0',
  shipType: '捕捞船',
  power: '10',
  portName: '茂名港',
  longitude: '113.34504',
  latitude: '22.98142',
  locateTime: '2024-05-05 06:07:15'
})

/**
 * 点击关闭按钮
 */
const close = () => {
  mapStore.updateInfoWindow(false)
}

onMounted(() => {
  // initMap()
})

</script>

<style lang="scss" scoped>
.trawler-info-window{
  position: absolute;
  top: 65px;
  left: 5px;
  width: 500px;
  box-sizing: border-box;
  background-color: #fff;

  .trawler-info-header{
    width: 100%;
    height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-family: 'SHSCM';
    background-color: #167FFF;
    box-sizing: border-box;

    i{
      cursor: pointer;
    }
  }

  .trawler-info-list{
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    box-sizing: border-box;

    .trawler-info-list-item{
      display: grid;
      grid-template-columns: 75px auto;
      align-content: center;
      column-gap: 5px;
      line-height: 20px;
      font-size: 14px;
      color: #2c3e50;

      span{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .label{
        text-align: right;
        text-align-last: justify;
      }
    }
  }

  .trawler-info-button{
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }

}
</style>
