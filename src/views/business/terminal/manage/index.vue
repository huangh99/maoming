<template>
  <DialogComponent title="设备管理" @close="close">
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
    label: '设备编号',
    prop: 'code',
    type: 'input'
  },
  {
    label: '设备类型',
    prop: 'type',
    type: 'select',
    options: [
      {
        label: '北斗',
        value: '北斗'
      },
      {
        label: 'AIS',
        value: 'AIS'
      },
      {
        label: '其他',
        value: '其他'
      }
    ]
  },
  {
    label: '设备厂家',
    prop: 'factory',
    type: 'input'
  },
  {
    name: '查询',
    prop: 'query',
    theme: 'primary',
    type: 'button'
  }
]

let model = {
  code: '',
  type: '',
  factory: ''
}

const data = [
  {
    code: '281362',
    type: '北斗',
    factory: '福建飞通通讯科技股份有限公司'
  },
  {
    code: '281362',
    type: '北斗',
    factory: '福建飞通通讯科技股份有限公司'
  },
  {
    code: '281362',
    type: '北斗',
    factory: '福建飞通通讯科技股份有限公司'
  },
  {
    code: '281362',
    type: '北斗',
    factory: '福建飞通通讯科技股份有限公司'
  },
  {
    code: '281362',
    type: '北斗',
    factory: '福建飞通通讯科技股份有限公司'
  },
  {
    code: '281362',
    type: '北斗',
    factory: '福建飞通通讯科技股份有限公司'
  }
]

const columns = [
  {
    label: '设备编号',
    prop: 'code'
  },
  {
    label: '设备类型',
    prop: 'type'
  },
  {
    label: '设备厂家',
    prop: 'factory'
  }
]

const config = {
  type: 'index',
  width: 120
}

const operate = [
  {
    label: '编辑',
    prop: 'edit',
    theme: 'primary'
  },
  {
    label: '删除',
    prop: 'delete',
    theme: 'danger'
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
