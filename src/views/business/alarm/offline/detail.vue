<template>
  <DialogComponent title="离线报警配置记录" @close="$emit('close')">
    <FilterComponent :filter-items="items" :filter-model="model"/>
    <TableComponent style="height: 500px;" :data="data" :columns="columns" :config="config"/>
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
import FilterComponent from '@/components/Filter/index.vue'
import TableComponent from '@/components/Table/index.vue'
import DialogComponent from '@/components/Dialog/index.vue'

const items = [
  {
    label: '操作人',
    prop: 'operator',
    type: 'input'
  },
  {
    label: '时间区间',
    prop: 'time',
    type: 'datetimerange'
  },
  {
    name: '查询',
    prop: 'query',
    theme: 'primary',
    type: 'button'
  }
]

let model = {
  operator: '',
  time: ''
}

const data = [
  {
    operator: 'admin',
    operatingTime: '2024-01-01 00:00:00',
    limit: '5',
    oldLimit: '10'
  },
  {
    operator: 'admin',
    operatingTime: '2024-01-01 00:00:00',
    limit: '5',
    oldLimit: '10'
  },
  {
    operator: 'admin',
    operatingTime: '2024-01-01 00:00:00',
    limit: '5',
    oldLimit: '10'
  },
  {
    operator: 'admin',
    operatingTime: '2024-01-01 00:00:00',
    limit: '5',
    oldLimit: '10'
  },
  {
    operator: 'admin',
    operatingTime: '2024-01-01 00:00:00',
    limit: '5',
    oldLimit: '10'
  },
  {
    operator: 'admin',
    operatingTime: '2024-01-01 00:00:00',
    limit: '5',
    oldLimit: '10'
  }
]

const columns = [
  {
    label: '操作人',
    prop: 'operator'
  },
  {
    label: '操作时间',
    prop: 'operatingTime'
  },
  {
    label: '操作前阈值',
    prop: 'oldLimit'
  },
  {
    label: '操作后阈值',
    prop: 'limit'
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
