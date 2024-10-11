<template>
  <el-form :inline="true" :model="model">
    <el-form-item
      v-for="(item, index) in filterItems"
      :key="index"
      :label="item.label">

      <el-input
        v-if="item.type === 'input'"
        v-model="model[item.prop]"
        :placeholder="item.placeholder ? item.placeholder : ''"
        :clearable="item.clearable !== false"
        style="width: 200px">
      </el-input>

      <el-select
        v-if="item.type === 'select'"
        v-model="model[item.prop]"
        :clearable="item.clearable !== false"
        :placeholder="item.placeholder ? item.placeholder : ''"
        @change="handle(item.event)"
        style="width: 200px">
        <el-option
          v-for="(opt, index) in item.options"
          :key="index"
          :label="opt.label"
          :value="opt.value">
        </el-option>
      </el-select>

      <el-date-picker
        v-if="item.type === 'date'"
        v-model="model[item.prop]"
        type="date"
        :placeholder="item.placeholder ? item.placeholder : '请选择日期'"
        value-format="yyyy-MM-dd"
        :clearable="item.clearable !== false"
        style="width: 200px">
      </el-date-picker>

      <el-date-picker
        v-if="item.type === 'datetime'"
        v-model="model[item.prop]"
        type="datetime"
        :placeholder="item.placeholder ? item.placeholder : '请选择时间'"
        value-format="yyyy-MM-dd HH:mm:ss"
        :clearable="item.clearable !== false"
        style="width: 200px">
      </el-date-picker>

      <el-date-picker
        v-if="item.type === 'daterange'"
        v-model="model[item.prop]"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
        :clearable="item.clearable !== false"
        style="width: 280px">
      </el-date-picker>

      <el-date-picker
        v-if="item.type === 'datetimerange'"
        v-model="model[item.prop]"
        type="datetimerange"
        range-separator="-"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        value-format="yyyy-MM-dd HH:mm:ss"
        :clearable="item.clearable !== false"
        style="width: 360px">
      </el-date-picker>

      <el-button
        v-if="item.type === 'button'"
        :type="item.theme"
        @click="handle(item.prop)">{{ item.name }}
      </el-button>

    </el-form-item>
  </el-form>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits([ 'handle', 'change' ])

const props = defineProps({
  'filter-items': {
    type: Array,
    required: false,
    default: () => {
      return []
    }
  },
  'filter-model': {
    type: Object,
    required: false,
    default: () => {
      return {}
    }
  }
})

const model = ref({})

/**
 * 点击操作按钮
 * @param type 操作类型
 */
const handle = (type) => {
  emit('handle', type, model.value)
}

/**
 * 重置表单数据
 */
const reset = () => {
  model.value = { ...props.filterModel }
}

onMounted(() => {
  model.value = { ...props.filterModel }
})

defineExpose({
  reset
})
</script>

<style lang="scss" scoped></style>
