<template>
  <el-dialog class="dialog-wrapper" v-model="dialogVisible" :show-close="false" :width="width" :draggable="draggable" :modal="modal" :close-on-click-modal="false" :close-on-press-escape="false">
    <template #header="{ titleId, titleClass }">
      <div class="title" :id="titleId" :class="titleClass">
        <span>{{ title }}</span>
        <el-icon @click="close"><Close /></el-icon>
      </div>
    </template>
    <slot></slot>
  </el-dialog>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { Close } from '@element-plus/icons-vue'

const emit = defineEmits([ 'close' ])
const props = defineProps({
  visible: {
    default: true,
    required: false,
    type: Boolean
  },
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
  draggable: {
    default: false,
    required: false,
    type: Boolean
  },
  modal: {
    default: false,
    required: false,
    type: Boolean
  }
})

const dialogVisible = ref(true)

/**
 * 点击关闭按钮
 */
const close = () => {
  emit('close')
}

onMounted(() => {
  console.log(props)

  // dialogVisible.value = props.visible
})
</script>

<style lang="scss" scoped>

</style>
