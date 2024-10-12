<template>
  <el-table height="100%" :data="data" stripe table-layout="fixed" :size="size" @selection-change="selectChange">
    <el-table-column v-if="config.type === 'index'" label="序号" type="index" align="center" width="60" />

    <el-table-column v-if="config.type === 'selection'" type="selection" align="center" width="60" />

    <el-table-column v-for="(item, index) in columns" :key="index" :label="item.label" :prop="item.prop"
      show-overflow-tooltip :min-width="item.width">
    </el-table-column>

    <el-table-column v-if="operate.length" align="center" fixed="right" label="操作" :width="config.width">

      <template #default="scope">
        <el-button v-for="(item, index) in operate" :key="index" link :type="item.theme"
          @click="handle(item.prop, scope.row)">{{ item.label }}</el-button>
      </template>

    </el-table-column>
  </el-table>
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits([ 'handle', 'selectChange' ])

defineProps({
  columns: {
    type: Array,
    required: false,
    default: () => {
      return []
    }
  },
  data: {
    type: Array,
    required: false,
    default: () => {
      return []
    }
  },
  operate: {
    type: Array,
    required: false,
    default: () => {
      return []
    }
  },
  config: {
    type: Object,
    required: false,
    default: () => {
      return {
        type: 'index',
        width: 90
      }
    }
  },
  size: {
    type: String,
    required: false,
    default: ''
  }
})

const table = ref(null)

/**
 * 点击操作按钮
 * @param type 操作类型
 * @param data 当前行数据
 */
const handle = (type, data) => {
  emit('handle', type, data)
}

/**
 * 表格重新布局
 */
const doLayout = () => {
  table.value.doLayout()
}

/**
 * 选中内容变化
 * @param data 选中数据
 */
const selectChange = (data) => {
  emit('selectChange', data)
}

defineExpose({
  doLayout
})

</script>

<style lang="scss" scoped></style>
