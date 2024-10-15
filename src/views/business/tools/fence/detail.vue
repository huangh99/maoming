<template>
  <el-form class="detail-form" ref="form" :model="model" label-width="auto" :rules="rules" label-suffix="：">
    <el-form-item v-for="item in items" :key="item.prop" :label="item.label" :prop="item.prop"
      :style="`grid-column-start: span ${item.width || '1'};`">
      <el-input v-if="item.type === 'input'" v-model="model[item.prop]" />

      <el-input v-if="item.type === 'textarea'" v-model="model[item.prop]" :rows="item.rows || 2" type="textarea" />

      <el-select v-if="item.type === 'select'" v-model="model[item.prop]" :clearable="item.clearable">
        <el-option v-for="(opt, index) in item.options" :key="index" :label="opt.label" :value="opt.value">
        </el-option>
      </el-select>

      <el-date-picker v-if="item.type === 'date'" v-model="model[item.prop]" type="date"
        :placeholder="item.placeholder ? item.placeholder : '请选择日期'" value-format="yyyy-MM-dd"
        :clearable="item.clearable" style="width:100%">
      </el-date-picker>

      <el-date-picker v-if="item.type === 'datetime'" v-model="model[item.prop]" type="datetime"
        :placeholder="item.placeholder ? item.placeholder : '请选择时间'" value-format="yyyy-MM-dd HH:mm:ss"
        :clearable="item.clearable" style="width:100%">
      </el-date-picker>

      <el-date-picker v-if="item.type === 'daterange'" v-model="model[item.prop]" type="daterange" range-separator="-"
        start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd" :clearable="item.clearable"
        style="width:100%">
      </el-date-picker>

      <el-date-picker v-if="item.type === 'datetimerange'" v-model="model[item.prop]" type="datetimerange"
        range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间" value-format="yyyy-MM-dd HH:mm:ss"
        :clearable="item.clearable" style="width:100%">
      </el-date-picker>

      <el-radio-group v-if="item.type === 'radio'" v-model="model[item.prop]">
        <el-radio v-for="(opt,index) in item.options" :key="index" :value="opt.value">{{opt.label}}</el-radio>
      </el-radio-group>

      <el-space v-if="item.type === 'color'">
        <el-color-picker  v-model="model[item.prop]" show-alpha color-format="hex" />
        <span>{{ model[item.prop] }}</span>
      </el-space>

      <el-slider v-if="item.type === 'slider'" v-model="model[item.prop]" :max="item.max" :min="item.min"
        :step="item.step" />

      <div class="form-button" v-if="item.type === 'button'">
        <el-space>

          <el-button v-if="type === 'check'" type="primary">范围查看</el-button>

          <template v-else>
            <el-dropdown trigger="click">
              <el-button type="primary">
                范围选取<el-icon>
                  <ArrowDown />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="Circle">圆形</el-dropdown-item>
                  <el-dropdown-item command="Rectangle">矩形</el-dropdown-item>
                  <el-dropdown-item command="Polygon">多边形</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown trigger="click">
              <el-button type="primary">
                坐标录入<el-icon>
                  <ArrowDown />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="Circle">圆形</el-dropdown-item>
                  <el-dropdown-item command="Rectangle">矩形</el-dropdown-item>
                  <el-dropdown-item command="Polygon">多边形</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>

        </el-space>
      </div>

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
import { ArrowDown } from '@element-plus/icons-vue'

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
  name: '',
  positionInfo: [],
  address: '',
  longitude: '',
  latitude: '',
  portArea: '',
  type: '',
  berthNum: '',
  useto: '是',
  buildDate: '',
  throughput: '是',
  belongArea: '是',
  stopBoat: '',
  fillColor: '#FF0000',
  diaphaneity: 0.5,
  lineColor: '#FF0000',
  lineWidth: 1,
  areaType: '',
  remarks: ''
})

const items = ref([
  {
    label: '电子围栏名称',
    prop: 'name',
    type: 'input'
  },
  {
    label: '范围坐标',
    prop: 'positionInfo',
    type: 'button'
  },
  {
    label: '中心点经度',
    prop: 'longitude',
    type: 'input'
  },
  {
    label: '中心点纬度',
    prop: 'latitude',
    type: 'input'
  },
  {
    label: '面积(k㎡)',
    prop: 'portArea',
    type: 'input'
  },
  {
    label: '是否预警',
    prop: 'belongArea',
    type: 'radio',
    options: [
      {
        label: '是',
        value: '是'
      },
      {
        label: '否',
        value: '否'
      }
    ]
  },
  {
    label: '警戒类型',
    prop: 'type',
    type: 'select',
    options: [
      {
        label: '禁止停泊',
        value: '禁止停泊'
      }
    ]
  },
  {
    label: '用户范围',
    prop: 'berthNum',
    type: 'select',
    options: []
  },
  {
    label: '特定时间生效',
    prop: 'useto',
    type: 'radio',
    options: [
      {
        label: '是',
        value: '是'
      },
      {
        label: '否',
        value: '否'
      }
    ]
  },
  {
    label: '是否生效',
    prop: 'throughput',
    type: 'radio',
    options: [
      {
        label: '是',
        value: '是'
      },
      {
        label: '否',
        value: '否'
      }
    ]
  },
  {
    label: '生效开始时间',
    prop: 'buildDate',
    type: 'date'
  },
  {
    label: '生效结束时间',
    prop: 'stopBoat',
    type: 'date'
  },
  {
    label: '具体位置',
    prop: 'address',
    type: 'input',
    width: 2
  },
  {
    label: '填充色',
    prop: 'fillColor',
    type: 'color'
  },
  {
    label: '透明度',
    prop: 'diaphaneity',
    max: 1,
    min: 0,
    step: 0.1,
    type: 'slider'
  },
  {
    label: '线条颜色',
    prop: 'lineColor',
    type: 'color'
  },
  {
    label: '线条宽度',
    prop: 'lineWidth',
    max: 10,
    min: 1,
    step: 1,
    type: 'slider'
  },
  {
    label: '备注',
    prop: 'remarks',
    type: 'textarea',
    width: 2
  }
])

const rules = {
  name: [ { required: true, message: '渔港名称 未填写', type: 'error' } ],
  positionInfo: [ { required: true, message: '范围坐标 未选择', type: 'error' } ],
  longitude: [
    { required: true, message: '中心点经度 未填写', type: 'error' },
    { pattern: /^-?((1?[0-7]?\d(\.\d{1,10})?)|(180(\.0{1,10})?))$/, message: '经度格式不正确', type: 'error' }
  ],
  latitude: [
    { required: true, message: '中心点纬度 未填写', type: 'error' },
    { pattern: /^-?(([0-8]?\d(\.\d{1,10})?)|(90(\.0{1,10})?))$/, message: '纬度格式不正确', type: 'error' }
  ],
  belongArea: [ { required: true, message: '行政区划 未选择', type: 'error' } ]
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
.detail-form {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}

.button-wrapper {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
