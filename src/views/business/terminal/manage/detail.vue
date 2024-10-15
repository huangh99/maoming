<template>
  <el-form class="detail-form" ref="form" :model="model" label-width="auto" :rules="rules" label-suffix="：">
    <el-form-item v-for="(item,index) in items" :key="index" :label="item.label" :prop="item.prop" :style="`grid-column-start: span ${item.width || '1'};`">
      <el-input v-if="item.type === 'input'" v-model="model[item.prop]" />

      <el-select
        v-if="item.type === 'select'"
        v-model="model[item.prop]"
        :clearable="item.clearable"
        >
        <el-option
          v-for="(opt, index) in item.options"
          :key="index"
          :label="opt.label"
          :value="opt.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div class="button-wrapper">
    <el-button type="primary" @click="validate">提交</el-button>
    <el-button @click="$emit('close')">取消</el-button>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const emit = defineEmits([ 'close' ])
const props = defineProps({
  data: {
    default() {
      return {}
    },
    required: false,
    type: Object
  },
  type: {
    default: '',
    required: false,
    type: String
  }
})

const form = ref(null)

const model = reactive({
  code: '',
  type: '',
  factory: ''
})

const items = ref([
  {
    label: '设备编号',
    prop: 'code',
    type: 'input'
  },
  {
    label: '设备类型',
    prop: 'type',
    type: 'select',
    options: []
  },
  {
    label: '设备厂家',
    prop: 'factory',
    type: 'input'
  }
])

const rules = {
  code: [ { required: true, message: '设备编号 未填写', trigger: 'blur' } ]
}

/**
 * 初始化赋值
 */
 const initData = () => {
  if (props.type !== 'add') {
    Object.keys(model).forEach((key) => {
      model[key] = props.data[key]
    })
  }
}

/**
 * 表单校验
 */
const validate = () => {
  form.value.validate().then((valid) => {
    if (valid) {
      submit()
    }
  })
}

/**
 * 表单校验
 */
const submit = () => {
  ElMessage.success('提交成功！')
  emit('close', true)
}

initData()

</script>

<style lang="scss" scoped>
.detail-form{
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}

.button-wrapper{
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
