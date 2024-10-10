<template>
  <ul class="map-tool">
    <li class="map-tool-item" v-for="(item,index) in list" :key="index">
      <el-tooltip
        class="box-item"
        effect="light"
        :content="item.label"
        placement="top"
      >
        <img :src="getAssetsFile(`icon-${item.icon}.png`)" alt="">
      </el-tooltip>
      <ul class="menu-list" v-if="item.children">
        <li :class="['menu-list-item', base===child.prop? 'active':'']" v-for="(child,_index) in item.children" :key="_index">{{ child.label }}</li>
      </ul>
    </li>
  </ul>

  <img class="alarm-icon" src="@/assets/images/icon-alarm.png" alt="">

</template>
<script setup>
import { ref, onMounted } from 'vue'
import * as maptalks from 'maptalks'
import { getAssetsFile } from '@/utils/common.js'

const base = ref('light')

const list = [
  {
    label:'方搜',
    prop:'',
    icon:'search-square'
  },
  {
    label:'圆搜',
    prop:'',
    icon:'search-circle'
  },
  {
    label:'测距',
    prop:'',
    icon:'distance'
  },
  {
    label:'测面',
    prop:'',
    icon:'area'
  },
  {
    label:'底图切换',
    prop:'',
    icon:'layer',
    children:[
      {
        label:'遥感',
        prop:'satellite'
      },
      {
        label:'海图',
        prop:'sea'
      },
      {
        label:'浅色',
        prop:'light'
      },
      {
        label:'深色',
        prop:'dark'
      }
    ]
  },
  {
    label:'复位',
    prop:'',
    icon:'reset'
  },
  {
    label:'全屏',
    prop:'',
    icon:'screen'
  }
]

onMounted(()=>{
  // initMap()
})

</script>

<style lang="scss" scoped>
.map-tool{
  position: absolute;
  left: 10px;
  top: 50%;
  width: 32px;
  border-radius: 2px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
  background-color: #fff;

  .map-tool-item{
    position: relative;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    cursor: pointer;

    &:not(:last-of-type){
      border-bottom: 1px solid #ddd;
    }

    &:hover{
      background-color: #eee;
      .menu-list{
        visibility: visible;
        opacity: 1;
      }
    }

    &.active{
      background-color: #c6e2ff;
    }

    .menu-list{
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

      .menu-list-item{
        font-size: 12px;
        height: 28px;
        line-height: 28px;

        &:not(:last-of-type){
          border-bottom: 1px solid #ddd;
        }

        &:hover{
          background-color: #eee;
        }

        &.active{
          background-color: #c6e2ff;
        }
        
      }
    }
  }
}

.alarm-icon{
  position: absolute;
  right: 5px;
  top: 65px;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>
