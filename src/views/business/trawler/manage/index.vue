<template>
  <DialogComponent title="渔船信息" @close="close">
    <FilterComponent :filter-items="items" :filter-model="model"/>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </DialogComponent>
</template>
<script setup>
import FilterComponent from '@/components/Filter/index.vue'
import DialogComponent from '@/components/Dialog/index.vue'

const items = [
  {
    label: '姓名',
    prop: 'name',
    type: 'input'
  },
  {
    label: '姓名',
    prop: 'name',
    type: 'daterange'
  },
  {
    label: '姓名',
    prop: 'name',
    type: 'select',
    options: [
      {
        label: '111',
        value: '111'
      }
    ]
  },
  {
    name: '查询',
    prop: 'query',
    theme: 'primary',
    type: 'button'
  },
  {
    name: '新增',
    prop: 'add',
    theme: 'primary',
    type: 'button'
  }
]

let model = {
  name: ''
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

/**
 * 点击关闭按钮
 */
const close = () => {}

</script>

<style lang="scss" scoped>

</style>
