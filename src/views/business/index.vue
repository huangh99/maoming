<template>
  <HeaderMenuComponent/>
  <MapComponent/>
  <div class="content-container">
    <router-view></router-view>
  </div>
</template>
<script setup>
import HeaderMenuComponent from '@/components/HeaderMenu/index.vue'
import MapComponent from '@/components/Map/index.vue'

window.name = 'business_window'
</script>

<style lang="scss" scoped>
.content-container{
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  pointer-events: none;

  :deep(.el-overlay){
    &:has(.dialog-wrapper){
      pointer-events: all;
    }
  }

  :deep(.dialog-wrapper.el-dialog){
    padding: 0;
    border-radius: 12px;
    background-color: #fff;
    pointer-events: all;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;

    .el-dialog__header{
      padding: 0;

      .title{
        width: 100%;
        height: 54px;
        padding: 0 30px;
        background: #F4F5F7;
        border-radius: 12px 12px 0px 0px;
        color: #252B3A;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;

        .el-icon{
          cursor: pointer;

          &:active{
            opacity: .8;
          }
        }
      }

    }

    .el-dialog__body{
      padding: 15px 30px;
      box-sizing: border-box;
    }
  }
}

</style>
