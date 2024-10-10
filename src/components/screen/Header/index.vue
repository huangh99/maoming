<template>
  <header>
    <div class="title">
      北斗位置监控平台
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="true"
      @select="handleSelect"
    >
      <el-sub-menu :index="item.value" v-for="item in menu" :key="item.value">
        <template #title>{{item.label}}</template>
        <el-menu-item :index="child.value" v-for="child in item.children" :key="child.value">{{child.label}}</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <div class="user">
      <el-button>系统设置</el-button>
      <el-avatar :icon="UserFilled" :size="28"/>
      <span>admin</span>
    </div>
  </header>

</template>
<script setup>
import { ref,onMounted } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
import {menu} from './menu.js'

const activeIndex = ref('1')
const handleSelect = () => {
  console.log(111)
}

const initMenu = () => {

}

onMounted(()=>{
  // initMenu()
})


</script>

<style lang="scss" scoped>
header{
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid #dcdfe6;

  .title{
    color: #409eff;
    font-size: 24px;
    font-family: 'YSR';
    margin-right: 20px;
  }

  :deep(.el-menu){
    flex: 1;
    border-bottom: none;
  }

  .user{
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
