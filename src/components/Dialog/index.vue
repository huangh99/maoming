<template>
  <div class="dialog-wrapper" :style="`width:${width? width:'1230'}px;height:${height? height+'px':'unset'};max-height:${maxHeight? maxHeight+'px':'unset'};`">
    <div class="title">
      <span>{{ title }}</span>
      <el-icon @click="close"><Close /></el-icon>
    </div>
    <div class="dialog-content" :style="`max-height: ${maxHeight? (maxHeight-54)+'px':'unset'};`">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { Close } from '@element-plus/icons-vue'

const emit = defineEmits([ 'close' ])

defineProps({
  title: {
    default: '',
    required: false,
    type: String
  },
  width: {
    default: '1230',
    required: false,
    type: [ String, Number ]
  },
  height: {
    default: '',
    required: false,
    type: [ String, Number ]
  },
  maxHeight: {
    default: '',
    required: false,
    type: [ String, Number ]
  }
})

/**
 * 点击关闭按钮
 */
const close = () => {
  emit('close')
}

</script>

<style lang="scss" scoped>
.dialog-wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background-color: #fff;
  pointer-events: all;

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

  .dialog-content{
    padding: 15px 30px;
    box-sizing: border-box;
  }
}
</style>
