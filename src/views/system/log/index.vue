<template>
  <FilterComponent :filter-items="items" :filter-model="model"/>
  <TableComponent style="height: calc(100% - 92px);" :data="data" :columns="columns" :config="config" size="large"/>
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
</template>
<script setup>
import FilterComponent from '@/components/Filter/index.vue'
import TableComponent from '@/components/Table/index.vue'

const items = [
  {
    label: '所属模块',
    prop: 'module',
    type: 'input'
  },
  {
    label: '操作时间',
    prop: 'time',
    type: 'input'
  },
  {
    name: '查询',
    prop: 'query',
    theme: 'primary',
    type: 'button'
  },
  {
    name: '导出',
    prop: 'add',
    theme: 'warning',
    type: 'button'
  }
]

let model = {
  module: '',
  time: ''
}

const data = [
  {
    boatName: '新增用户',
    terminalCode: '系统设置模块',
    address: '{}',
    ownerName: '20224-01-01 00:00:00',
    ip: '10.10.10.04',
    people: 'admin'
  }
]

const columns = [
  {
    label: '操作名称',
    prop: 'boatName'
  },
  {
    label: '所属模块',
    prop: 'terminalCode'
  },
  {
    label: '请求参数',
    prop: 'address'
  },
  {
    label: '操作时间',
    prop: 'ownerName'
  },
  {
    label: 'IP地址',
    prop: 'ip'
  },
  {
    label: '操作人',
    prop: 'people'
  }
]

const config = {
  type: 'index',
  width: 120
}

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
</script>

<style lang="scss" scoped>

</style>
