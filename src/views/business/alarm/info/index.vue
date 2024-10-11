<template>
  <DialogComponent title="报警信息" @close="close">
    <FilterComponent :filter-items="items" :filter-model="model"/>
    <TableComponent style="height: 500px;" :data="data" :columns="columns" :config="config" :operate="operate"/>
    <el-pagination
      v-model:current-page="pagination.current"
      v-model:page-size="pagination.size"
      :total="pagination.total"
      :page-sizes="[ 10, 15, 20, 50 ]"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      style="margin-top: 10px; justify-content: center;"
    />
  </DialogComponent>
</template>
<script setup>
import { useRouter } from 'vue-router'
import FilterComponent from '@/components/Filter/index.vue'
import TableComponent from '@/components/Table/index.vue'
import DialogComponent from '@/components/Dialog/index.vue'

const router = useRouter()

const items = [
  {
    label: '时间区间',
    prop: 'time',
    type: 'datetimerange'
  },
  {
    label: '报警类型',
    prop: 'alarmType',
    type: 'select',
    options: [
      {
        label: '休渔期出海',
        value: '休渔期出海'
      }
    ]
  },
  {
    name: '查询',
    prop: 'query',
    theme: 'primary',
    type: 'button'
  }
]

let model = {
  time: '',
  alarmType: ''
}

const data = [
  {
    boatName: '粤茂滨渔54108',
    alarmType: '412537779',
    alarmTime: '2024-01-01 00:00:00',
    status: '待受理'
  },
  {
    boatName: '粤茂滨渔54108',
    alarmType: '412537779',
    alarmTime: '2024-01-01 00:00:00',
    status: '待受理'
  },
  {
    boatName: '粤茂滨渔54108',
    alarmType: '412537779',
    alarmTime: '2024-01-01 00:00:00',
    status: '待受理'
  },
  {
    boatName: '粤茂滨渔54108',
    alarmType: '412537779',
    alarmTime: '2024-01-01 00:00:00',
    status: '待受理'
  },
  {
    boatName: '粤茂滨渔54108',
    alarmType: '412537779',
    alarmTime: '2024-01-01 00:00:00',
    status: '待受理'
  },
  {
    boatName: '粤茂滨渔54108',
    alarmType: '412537779',
    alarmTime: '2024-01-01 00:00:00',
    status: '待受理'
  }
]

const columns = [
  {
    label: '渔船名称',
    prop: 'boatName'
  },
  {
    label: '报警类型',
    prop: 'alarmType'
  },
  {
    label: '报警时间',
    prop: 'alarmTime'
  },
  {
    label: '状态',
    prop: 'status'
  }
]

const config = {
  type: 'index',
  width: 120
}

const operate = [
  {
    label: '处置',
    prop: 'dispose',
    theme: 'primary'
  }
]

const pagination = {
  current: 1,
  size: 15,
  total: 0
}

/**
 * 分页大小变化
 * @param val 分页大小
 */
const handleSizeChange = (val) => {
  console.log(val)
}

/**
 * 页码变化
 * @param val 当前页码
 */
const handleCurrentChange = (val) => {
  console.log(val)
}

/**
 * 点击关闭按钮
 */
const close = () => {
  router.push('/business')
}

</script>

<style lang="scss" scoped>

</style>
