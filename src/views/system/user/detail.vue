<template>
  <el-form class="detail-form" ref="form" :model="model" label-width="auto" :rules="rules" label-suffix="：">
    <el-form-item v-for="(item,index) in items" :key="index" :label="item.label" :prop="item.prop" :style="`grid-column-start: span ${item.width || '1'};`">
      <el-input v-if="item.type === 'input'" v-model="model[item.prop]" />
      <el-input v-if="item.type === 'password'" type="password" v-model="model[item.prop]" show-password/>

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
  username: '',
  password: '',
  confirmPassword: '',
  displayName: '',
  phone: '',
  roleIds: [],
  departId: '',
  email: '',
  avatar: ''
})

const items = ref([
  {
    label: '用户账号',
    prop: 'username',
    type: 'input'
  },
  {
    label: '登录密码',
    prop: 'password',
    type: 'password',
    power: true,
    show: () => props.type === 'add'
  },
  {
    label: '确认密码',
    prop: 'confirmPassword',
    type: 'password',
    power: true,
    show: () => props.type === 'add'
  },
  {
    label: '用户名称',
    prop: 'displayName',
    type: 'input'
  },
  {
    label: '手机号码',
    prop: 'phone',
    type: 'input'
  },
  {
    label: '用户角色',
    prop: 'roleIds',
    type: 'select',
    multiple: true,
    options: []
  },
  // {
  //   label: '行政区划',
  //   prop: 'departId',
  //   type: 'cascader',
  //   options: []
  // },
  {
    label: '邮箱',
    prop: 'email',
    type: 'input'
  }
  // {
  //   label: '头像',
  //   prop: 'avatar',
  //   type: 'image'
  // }
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
