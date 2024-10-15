<template>
  <el-form class="detail-form" ref="form" :model="model" label-width="auto" :rules="rules" label-suffix="：">
    <el-form-item v-for="(item,index) in items" :key="index" :label="item.label" :prop="item.prop" :style="`grid-column-start: span ${item.width || '1'};`">
      <el-input v-if="item.type === 'input'" v-model="model[item.prop]" />
      <el-input v-if="item.type === 'password'" type="password" v-model="model[item.prop]" show-password/>
      <el-input v-if="item.type === 'textarea'" v-model="model[item.prop]" :rows="item.rows || 2" type="textarea" />

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

      <el-radio-group v-if="item.type === 'radio'" v-model="model[item.prop]">
        <el-radio-button v-for="(opt, index) in item.options" :key="index" :label="opt.label" :value="opt.value" />
      </el-radio-group>

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
  powerType: '1',
  boatName: '',
  terminalCode: '',
  address: '',
  ownerName: '',
  route: '',
  sort: ''
})

const items = ref([
{
    label: '菜单类型',
    prop: 'powerType',
    type: 'radio',
    options: [
      {
        label: '模块',
        value: '1'
      },
      {
        label: '页面',
        value: '2'
      },
      {
        label: '按钮',
        value: '3'
      }
    ]
  },
  {
    label: '菜单名称',
    prop: 'boatName',
    type: 'input'
  },
  {
    label: '菜单编码',
    prop: 'terminalCode',
    type: 'input'
  },
  {
    label: '图标',
    prop: 'address',
    type: 'input'
  },
  {
    label: '组件地址',
    prop: 'ownerName',
    type: 'input'
  },
  {
    label: '路由地址',
    prop: 'route',
    type: 'input'
  },
  {
    label: '排序',
    prop: 'sort',
    type: 'input'
  }
])

const rules = {
  confirmPassword: [
    { required: true, message: '确认密码 未填写', type: 'error' },
    {
      validator: (val) => {
        if (model.password) {
          return val === model.password
        }
        return true
      },
      message: '确认密码与登录密码不一致'
    }
  ],
  password: [
    { required: true, message: '登录密码 未填写', type: 'error' },
    {
      validator: (val) => {
        if (model.confirmPassword) {
          return val === model.confirmPassword
        }
        return true
      },
      message: '登录密码与确认密码不一致'
    }
  ],
  username: [ { required: true, message: '用户账号 未填写', type: 'error' } ],
  displayName: [ { required: true, message: '用户名称 未填写', type: 'error' } ],
  roleIds: [ { required: true, message: '用户角色 未选择', type: 'error' } ],
  phone: [
    { required: true, message: '手机号码 未填写', type: 'error' },
    {
      validator: (val) => /^1[3456789]\d{9}$/.test(val),
      message: '手机号格式有误'
    }
  ]
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
// .detail-form{
//   display: grid;
//   box-sizing: border-box;
//   grid-template-columns: 1fr 1fr;
//   column-gap: 20px;
// }

.button-wrapper{
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
