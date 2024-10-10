<template>
  <ul class="map-tool">
    <li :class="['map-tool-item', item.active? 'active':'']" v-for="(item, index) in list" :key="index" @click="handleToolEvent(item.event, item.prop, item.active, index)">
      <el-tooltip class="box-item" effect="light" :content="item.label" placement="top">
        <img :src="getAssetsFile(`icon-${item.icon}.png`)" alt="">
      </el-tooltip>
      <ul class="menu-list" v-if="item.children">
        <li :class="['menu-list-item', child.active? 'active' : '']" v-for="(child, _index) in item.children"
          :key="_index" @click.stop="handleToolEvent(child.event, child.prop, child.active, index, child)">{{ child.label }}</li>
      </ul>
    </li>
  </ul>

</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { useFullscreen } from '@vueuse/core'
import GlobalMap from '@/components/Map/js/GlobalMap'
import MeasureToolInMap from '@/components/Map/js/MeasureToolInMap'
import { getAssetsFile } from '@/utils/common'

const { isFullscreen, toggle } = useFullscreen()
let measureTool = null
let globalMap = null

const list = reactive([
  {
    label: '方搜',
    event: 'search-square',
    icon: 'search-square'
  },
  {
    label: '圆搜',
    event: 'search-circle',
    icon: 'search-circle'
  },
  {
    label: '测距',
    active: false,
    event: 'measure-distance',
    prop: 'distance',
    icon: 'distance'
  },
  {
    label: '测面',
    active: false,
    event: 'measure-area',
    prop: 'area',
    icon: 'area'
  },
  {
    label: '底图切换',
    event: '',
    icon: 'layer',
    children: [
      {
        label: '遥感',
        active: false,
        event: 'toggle-base',
        prop: 'satellite'
      },
      {
        label: '海图',
        active: true,
        event: 'toggle-base',
        prop: 'sea'
      },
      {
        label: '浅色',
        active: false,
        event: 'toggle-base',
        prop: 'light'
      },
      {
        label: '深色',
        active: false,
        event: 'toggle-base',
        prop: 'dark'
      }
    ]
  },
  {
    label: '复位',
    event: 'reset-map',
    icon: 'reset'
  },
  {
    label: '全屏',
    active: false,
    event: 'full-screen',
    icon: 'screen'
  }
])

/**
 * 地图工具
 * @param event 事件
 * @param type 类型
 */
const handleToolEvent = (event, type, active, index, subItem) => {
  if(!globalMap) {
    globalMap = new GlobalMap()
  }

  switch (event) {
    case 'search-square':

      break
    case 'search-circle':

      break
    case 'measure-distance':
    case 'measure-area':
      if(!measureTool) {
        measureTool = new MeasureToolInMap(globalMap.map)
      }
      measureTool.toggleTool(type)
      if(active) {
        list[index].active = false
      }else{
        list.forEach(item => {
          if(item.event.includes('measure')) {
            item.active = false
          }
        })
        list[index].active = true
      }

      break
    case 'toggle-base':
      globalMap.toggleBaseLayer(type)
      if(active) {
        subItem.active = false
      }else{
        list[index].children.forEach(item => {
          item.active = false
        })
        subItem.active = true
      }

      break
    case 'reset-map':
      globalMap.resetView()

      break
    case 'full-screen':
      list[index].active = !isFullscreen.value
      toggle()
      break

    default:
      break
  }

}

onMounted(() => {
  // initMap()
})

</script>

<style lang="scss" scoped>
.map-tool {
  position: absolute;
  left: 10px;
  top: 50%;
  width: 32px;
  border-radius: 2px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
  background-color: #fff;

  .map-tool-item {
    position: relative;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    cursor: pointer;

    &:not(:last-of-type) {
      border-bottom: 1px solid #ddd;
    }

    &:hover {
      background-color: #eee;

      .menu-list {
        visibility: visible;
        opacity: 1;
      }
    }

    &.active {
      background-color: #c6e2ff;
    }

    .menu-list {
      position: absolute;
      left: calc(100% + 5px);
      top: 0;
      width: 50px;
      border-radius: 2px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
      background-color: #fff;
      visibility: hidden;
      opacity: 0;
      transition: all .5s;

      .menu-list-item {
        font-size: 12px;
        height: 28px;
        line-height: 28px;

        &:not(:last-of-type) {
          border-bottom: 1px solid #ddd;
        }

        &:hover {
          background-color: #eee;
        }

        &.active {
          background-color: #c6e2ff;
        }
      }
    }
  }
}
</style>
