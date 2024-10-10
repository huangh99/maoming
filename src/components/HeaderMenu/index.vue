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
    >

    <el-sub-menu :index="item.value" v-for="item in menu" :key="item.value">
        <template #title>{{item.label}}</template>
        <el-menu-item :index="child.value" v-for="child in item.children" :key="child.value" @click="toggleNav">{{child.label}}</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <div class="user">
      <el-button :icon="Setting">系统设置</el-button>
      <el-avatar :icon="UserFilled" :size="28"/>
      <el-dropdown>
        <span class="username">admin</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { UserFilled, Setting } from '@element-plus/icons-vue'
import { menu } from './menu'

const router = useRouter()
const activeIndex = ref('port-manage')

/**
 * 导航跳转
 * @param nav 菜单项
 */
const toggleNav = (nav) => {
  console.log(nav)
  router.push('/business/port-manage')
}

// const initMenu = () => {

// }

onMounted(() => {
  // initMenu()
})

</script>

<style lang="scss" scoped>
header{
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-bottom: 2px solid #dcdfe6;

  .title{
    width: 300px;
    color: #409eff;
    font-size: 24px;
    font-family: 'YouSheRegular';
  }

  :deep(.el-menu){
    width: calc(100% - 510px);
    border-bottom: none;
  }

  .user{
    width: 210px;
    display: flex;
    align-items: center;
    gap: 10px;

    .username{
      cursor: pointer;
    }
  }
}
</style>
