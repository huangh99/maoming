<template>
  <div class="system-container">
    <SideMenuComponent/>
    <div class="main-container">
      <header>
        <el-icon  @click="toggleCollapse" class="collapse-icon">
          <Expand v-if="store.isCollapse"/>
          <Fold v-else/>
        </el-icon>
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="user">
          <el-button :icon="Monitor" @click="goBusiness">业务系统</el-button>
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
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowRight, UserFilled, Expand, Fold, Monitor } from '@element-plus/icons-vue'
import useSystemStore from '@/store/modules/system'
import SideMenuComponent from '@/components/SideMenu/index.vue'

// const router = useRouter()
const route = useRoute()
const store = useSystemStore()

const breadcrumb = ref([])

const toggleCollapse = () => {
  store.isCollapse = !store.isCollapse
}

/**
* 获取面包屑数据
*/
const getBreadcrumbData = () => {
  breadcrumb.value = []
  route.matched.forEach((item) => {
    if (item.meta.title) {
      breadcrumb.value.push(item.meta.title)
    }
  })
}

/**
 * 跳转到系统设置
 */
const goBusiness = () => {
  window.open('/business', 'business_window')
}

watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)

window.name = 'system_window'

</script>

<style lang="scss" scoped>
.system-container{
  width: 100%;
  height: 100%;
  display: flex;

  .main-container{
    flex: 1;
    display: flex;
    flex-direction: column;

    header{
      height: 60px;
      padding: 0 30px;
      align-items: center;
      display: grid;
      gap: 10px;
      grid-template-columns: min-content auto min-content;
      border-bottom: 2px solid #dcdfe6;
      box-sizing: border-box;

      .collapse-icon{
        cursor: pointer;
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

    .main-content{
      flex: 1;
      background-color: #f2f3f5;
      padding: 20px;
    }
  }
}
</style>
