<template>
  <ul class="map-tool">
    <li :class="['map-tool-item', item.active ? 'active' : '']" v-for="(item, index) in list" :key="index"
      @click="handleToolEvent(item.event, item.prop, item.active, index)">
      <el-tooltip class="box-item" effect="light" :content="item.label" placement="top">
        <img :src="getAssetsFile(`icon-${item.icon}.png`)" alt="">
      </el-tooltip>
      <ul class="menu-list" v-if="item.children">
        <li :class="['menu-list-item', child.active ? 'active' : '']" v-for="(child, _index) in item.children"
          :key="_index" @click.stop="handleToolEvent(child.event, child.prop, child.active, index, child)">{{
            child.label }}</li>
      </ul>
    </li>
  </ul>
  <img class="alarm-icon" src="@/assets/images/icon-alarm.png" alt="">
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
import GlobalMap from '@/components/Map/js/GlobalMap'
import DrawToolInMap from '@/components/Map/js/DrawToolInMap'
import MeasureToolInMap from '@/components/Map/js/MeasureToolInMap'
import { getAssetsFile } from '@/utils/common'

const router = useRouter()
const { isFullscreen, toggle } = useFullscreen()
let drawTool = null
let measureTool = null
let globalMap = null

const list = reactive([
  {
    label: '方搜',
    active: false,
    event: 'search-rectangle',
    prop: 'Rectangle',
    icon: 'search-rectangle'
  },
  {
    label: '圆搜',
    active: false,
    event: 'search-circle',
    prop: 'Circle',
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
        active: false,
        event: 'toggle-base',
        prop: 'sea'
      },
      {
        label: '浅色',
        active: true,
        event: 'toggle-base',
        prop: 'light'
      }
      // {
      //   label: '深色',
      //   active: false,
      //   event: 'toggle-base',
      //   prop: 'dark'
      // }
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
 * 区域搜索
 * @param {'Rectangle'|'Polygon'|'Circle'} type 区域类型
 * @param active 选中状态
 */
const searchByArea = (type, active) => {
  if(active) {
    destroyDrawTool()
  }else{
    if(!drawTool) {
      drawTool = new DrawToolInMap(globalMap.map)
    }
    const callback = (param) => {
      const coordinates = param.geometry.getCoordinates()
      let point = []
      switch (type) {
        case 'Circle': {
          point = {
            x: coordinates.x,
            y: coordinates.y,
            r: param.geometry.getRadius()
          }
          // searchType.value = 'circle'
          break
        }
        case 'Polygon':
        case 'Rectangle': {
          point = coordinates[0].map((item) => ({
            x: item.x,
            y: item.y
          }))
          // searchType.value = 'polygon'
          break
        }
        default: {
          break
        }
      }
      // 查询
      // const str = type[event]

      // searchType.value = str.replace(str[0], str[0].toLowerCase())
      // searchCoords.value = JSON.stringify(point)
      // dialogVisible.value = true
      console.log(point)
      router.push('/business/regional-search')

    }

    drawTool.toggleDraw({
      drawend: callback,
      mode: type,
      symbol: {
        lineColor: '#F00',
        lineWidth: 2,
        polygonFill: 'rgb(255, 255, 255)',
        polygonOpacity: 0.5
      }
    })

  }
}

/**
 * 地图工具
 * @param event 事件
 * @param type 类型
 */
const handleToolEvent = (event, type, active, index, subItem) => {
  if (!globalMap) {
    globalMap = new GlobalMap()
  }

  switch (event) {
    case 'search-rectangle':
    case 'search-circle':
      destroyMeasureTool()
      searchByArea(type, active)
      if (active) {
        list[index].active = false
      } else {
        list.forEach(item => {
          if (item.event.includes('search') || item.event.includes('measure')) {
            item.active = false
          }
        })
        list[index].active = true
      }
      break
    case 'measure-distance':
    case 'measure-area':
      destroyDrawTool()
      if (!measureTool) {
        measureTool = new MeasureToolInMap(globalMap.map)
      }

      measureTool.toggleTool(type)
      if (active) {
        list[index].active = false
      } else {
        list.forEach(item => {
          if (item.event.includes('measure') || item.event.includes('search')) {
            item.active = false
          }
        })
        list[index].active = true
      }

      break
    case 'toggle-base':
      globalMap.toggleBaseLayer(type)
      if (active) {
        subItem.active = false
      } else {
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

/**
 * 销毁测量工具
 */
const destroyMeasureTool = () => {
  if (measureTool) {
    measureTool.destroy()
    measureTool = null
  }
}

/**
 * 销毁测量工具
 */
const destroyDrawTool = () => {
  if (drawTool) {
    drawTool.destroy()
    drawTool = null
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

.alarm-icon {
  position: absolute;
  top: 65px;
  right: 5px;
  width: 36px;
  height: 36px;
}
</style>
