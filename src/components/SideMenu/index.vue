<template>
  <aside>
    <div class="title" v-if="!store.isCollapse">北斗位置监控平台</div>
    <div class="title" v-else></div>
    <el-menu
      :default-active="activeIndex"
      :collapse="store.isCollapse"
    >
      <el-sub-menu :index="item.value" v-for="item in menu" :key="item.value">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item :index="child.value" v-for="child in item.children" :key="child.value" @click="toggleNav(child)">{{child.label}}</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </aside>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Setting } from '@element-plus/icons-vue'
import useSystemStore from '@/store/modules/system'
import { menu } from './menu'

const router = useRouter()
const store = useSystemStore()

const activeIndex = ref('system')

/**
 * 导航跳转
 * @param nav 菜单项
 */
const toggleNav = (nav) => {
  router.push(nav.path)
}

onMounted(() => {
  // initMenu()
})

</script>

<style lang="scss" scoped>
aside{
  .title{
    height: 60px;
    border-bottom: 2px solid #dcdfe6;
    color: #409eff;
    font-size: 24px;
    font-family: 'YouSheRegular';
    line-height: 60px;
    text-align: center;
    box-sizing: border-box;
  }

  :deep(.el-menu){
    border-right: none;
  }
}
</style>
